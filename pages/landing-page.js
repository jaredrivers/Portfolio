import React, { useEffect } from "react";
import Image from "next/image";
import NavigationMenu from "../components/NavigationMenu";
import { gsap } from "../node_modules/gsap/dist/gsap.js";
import profileImg from "../public/profile1.png";
import Footer from "../components/Footer";

function LandingPage() {
	useEffect(() => {
		gsap.to(".profileDiv", {
			duration: 1.5,
			ease: "power3.out",
			y: 105,
			opacity: 1,
		});
	}, []);

	return (
		<div
			id='landingPage'
			className='h-screen w-screen p-2 overflow-hidden sm:grid sm:grid-cols-3 relative space-y-3'>
			<div className='flex flex-nowrap pt-10 w-auto'>
				<NavigationMenu />
			</div>
			<div className='profileDiv flex flex-col items-center opacity-0 relative -top-20 sm:top-0 space-y-10 sm:space-y-3'>
				<Image
					src={profileImg}
					alt='profile image'
					width={350}
					height={344}
					layout='fixed'
					className='rounded-full pointer-events-none'
					priority
				/>
				<div className='flex flex-col self-center justify-center items-center w-max space-y-2 flex-wrap'>
					<p className='text-center'>JARED RIVER</p>
					<p className='text-center'>FULL STACK WEB DEVELOPER</p>
					<p className='text-center'>TEL AVIV</p>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
