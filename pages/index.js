import Head from "next/head";
import About from "./about";
import Projects from "./projects";
import Blog from "./blog";
import ContactMe from "./contact-me";
import LandingPage from "./landing-page";
import BackgroundName from "../components/BackgroundName";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jared River</title>
				<meta name='description' content="Jared River's Tech Portfolio" />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='bg-theme-beige overflow-hidden relative'>
				<BackgroundName />
				<LandingPage />
				<About />
				<Projects />
				<Blog />
				<ContactMe />
			</main>
		</>
	);
}
