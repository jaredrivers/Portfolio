import Head from "next/head";
import axios from "axios";
import About from "./about";
import Projects from "./projects";
import Blog from "./blog";
import ContactMe from "./contact-me";
import LandingPage from "./landing-page";
import More from "./more";
import BackgroundName from "../components/BackgroundName";

export default function Home({ content }) {
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
