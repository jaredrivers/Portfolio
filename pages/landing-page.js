import React, { useEffect } from "react";
import Image from "next/image";
import NavigationMenu from "../components/NavigationMenu";
import { gsap } from "../node_modules/gsap/dist/gsap.js";
import Footer from "../components/Footer";
import profileImg from "../public/profile10mb.png";

function LandingPage() {
	useEffect(() => {
		gsap.to(".profileDiv", {
			duration: 1.5,
			ease: "power3.out",
			y: 0,
			opacity: 1,
		});
	}, []);

	return (
		<div id='landingPage' className='min-h-screen w-screen'>
			<div className='h-full flex flex-col justify-center py-5 relative space-y-3'>
				<div className='flex flex-nowrap pt-10 w-auto'>
					<NavigationMenu />
				</div>
				<div className='profileDiv flex flex-col items-center opacity-0 relative sm:top-0 space-y-10 sm:space-y-3'>
					<Image
						src={profileImg}
						alt='profile image'
						width={350}
						height={344}
						layout='intrinsic'
						className='rounded-full pointer-events-none'
						priority
					/>
					<div className='flex flex-col self-center justify-center items-center w-max space-y-2 flex-wrap'>
						<p className='text-center'>JARED RIVER</p>
						<p className='text-center'>FULL STACK ENGINEER</p>
						<p className='text-center'>TEL AVIV</p>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
