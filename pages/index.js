import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import About from "./about";
import Projects from "./projects/projects";
import ContactMe from "./contact-me";
import LandingPage from "./landing-page";
import BackgroundName from "../components/BackgroundName";
import Navbar from "../components/Navbar";
import gsap from "../node_modules/gsap/dist/gsap.js";
import qs from "querystring";

export default function Home({
	posts,
	techItems,
	url,
	email,
	user_id,
	send_js_token,
	service_id,
}) {
	const [isOpen, setOpen] = useState(false);
	console.log(posts);

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
				<ContactMe
					email={email}
					service_id={service_id}
					user_id={user_id}
					token={send_js_token}
				/>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const email = process.env.EMAIL;
	const url = process.env.STRAPI_API_URL;
	const user_id = process.env.SEND_JS_USER_ID;
	const send_js_token = process.env.SEND_JS_TOKEN;
	const service_id = process.env.SEND_JS_SERVICE_ID;

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

	const techItems = techRes.data.data;

	return {
		props: {
			techItems,
			url,
			email,
			user_id,
			send_js_token,
			service_id,
		},
	};
}
