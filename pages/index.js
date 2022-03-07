import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import About from "./about";
import Projects from "./projects";
import Blog from "./blog";
import ContactMe from "./contact-me";
import LandingPage from "./landing-page";
import More from "./more";
import BackgroundName from "../components/BackgroundName";
import Navbar from "../components/Navbar";
import gsap from "../node_modules/gsap/dist/gsap.js";
import qs from "querystring";

export default function Home({ posts, techItems, url }) {
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		gsap.fromTo(
			".navbar",
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				ease: "power4.out",
				scrollTrigger: {
					trigger: "#landingPage",
					start: "bottom 20%",
					end: "bottom top",
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);

	return (
		<>
			<Head>
				<title>Jared River</title>
				<meta name='description' content="Jared River's Tech Portfolio" />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='overflow-hidden relative'>
				<BackgroundName />
				<LandingPage />
				<navbar>
					<Navbar isOpen={isOpen} setOpen={setOpen} />
				</navbar>
				<About items={techItems} url={url} />
				<Projects />
				<Blog content={posts} />
				<More />
				<ContactMe />
			</main>
		</>
	);
}

export async function getStaticProps() {
	const url = process.env.STRAPI_API_URL;
	const query = qs.stringify(
		{
			populate: "*",
		},
		{
			encodeValuesOnly: true,
		}
	);
	const techRes = await axios.get(
		process.env.STRAPI_API_URL + `/technologies?${query}`
	);
	const postsRes = await axios.get(url + "/posts");

	const posts = postsRes.data.data;
	const techItems = techRes.data.data;

	return {
		props: {
			posts,
			techItems,
			url,
		},
	};
}
