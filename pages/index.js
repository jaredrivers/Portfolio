import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPage from "./LandingPage";
import Page2 from "./Page2";
import { useRef } from "react";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jared River</title>
				<meta name='description' content="Jared River's Tech Portfolio" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section>
				<LandingPage />
				<Page2 />
			</section>
		</>
	);
}
