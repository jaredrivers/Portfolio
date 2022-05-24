import React, { useEffect, useState } from "react";
import Head from "next/head";
import About from "./about";
import Projects from "./projects/projects";
import ContactMe from "./contact-me";
import LandingPage from "./landing-page";
import BackgroundName from "../components/BackgroundName";
import Navbar from "../components/Navbar";
import { gsap } from "../node_modules/gsap/dist/gsap.js";
import client from "../client";

export default function Home({
	email,
	user_id,
	send_js_token,
	service_id,
	projects,
	tech,
}) {
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		gsap.fromTo(
			".navbar",
			{ opacity: 0, display: "none" },
			{
				display: "block",
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
		<div className='w-full relative clip overflow-hidden'>
			<Head>
				<title>Jared River</title>
				<meta name='description' content="Jared River's Tech Portfolio" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<BackgroundName />
			<navbar className='z-30'>
				<Navbar isOpen={isOpen} setOpen={setOpen} />
			</navbar>
			<main className='grid grid-cols-1 grid-rows-[repeat(4,_4fr)] gap-7 w-screen'>
				<LandingPage />
				<About items={tech} />

				<Projects data={projects} />

				<ContactMe
					email={email}
					service_id={service_id}
					user_id={user_id}
					token={send_js_token}
				/>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const email = process.env.EMAIL;
	const user_id = process.env.SEND_JS_USER_ID;
	const send_js_token = process.env.SEND_JS_TOKEN;
	const service_id = process.env.SEND_JS_SERVICE_ID;

	const projects = await client.fetch(`*[_type == "project"] {
		name,
		URL,
		slug,
		'id': _id,
		cover {
			asset-> {
				url,
				'dimensions': metadata.dimensions{height, width}
			}
		}
	}`);
	const tech = await client.fetch(`*[_type == "technology"] {
		icon {
			asset-> {
				url
			}
		},
		name,
		mainPage,
		order,
	}`);

	return {
		props: {
			projects,
			email,
			user_id,
			send_js_token,
			service_id,
			tech,
		},
	};
}
