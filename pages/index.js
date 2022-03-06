import React, { useEffect } from "react";
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
import Footer from "../components/Footer";
export default function Home({ content }) {
	useEffect(() => {
		gsap.fromTo(
			".navbar",
			{ opacity: 0, visibility: "hidden" },

			{
				visibility: "visible",
				opacity: 0.5,
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
					<Navbar />
				</navbar>
				<About />
				<Projects />
				<Blog content={content} />
				<More />
				<ContactMe />
			</main>
		</>
	);
}

export async function getStaticProps() {
	const res = await axios.get(process.env.STRAPI_API_URL);
	const posts = res.data.data;

	return {
		props: {
			content: posts,
		},
	};
}
