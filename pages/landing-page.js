import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import Footer from "../components/Footer";
import profileImg from "../public/profile10mb.png";
import NavigationMenu from "../components/NavigationMenu";

function LandingPage() {
	useEffect(() => {
		gsap.fromTo(
			".profileDiv",
			{
				duration: 1.5,
				ease: "power3.out",
				opacity: 0,
			},
			{ opacity: 1 }
		);
	}, []);

	return (
		<div id='landingPage' className='landingPage w-full flex items-cente'>
			<div className='max-w-[1240px] m-auto flex flex-col justify-center py-5 relative space-y-3'>
				<div>
					<NavigationMenu />
				</div>
				<div className='profileDiv flex-col items-center justify-center self-center space-y-3'>
					<div className='justify-center items-center'>
						<div className='block max-w-[350px] sm:max-w-[400px] m-auto p-5'>
							<Image
								src={profileImg}
								alt='profile image'
								width={350 / 10}
								height={344 / 10}
								layout='responsive'
								className='rounded-full pointer-events-none m-auto'
								priority
							/>
						</div>
					</div>
					<div className='flex flex-col self-center justify-center items-center w-max space-y-2 flex-wrap 2xl:text-[2.2rem]'>
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
