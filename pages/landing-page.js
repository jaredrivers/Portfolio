import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../components/NavigationMenu";
import { gsap } from "../node_modules/gsap/dist/gsap.js";

function LandingPage() {
	useEffect(() => {
		gsap.to(".profileImg", {
			duration: 1.5,
			ease: "power3.out",
			y: 300,
			opacity: 1,
		});
	}, []);
	return (
		<div className='h-screen w-screen p-2 overflow-hidden relative'>
			<div className='inline-grid grid-cols-3 w-full'>
				<div className='flex flex-nowrap pt-10 w-fit'>
					<NavigationMenu />
				</div>
				<img
					src={
						"https://res.cloudinary.com/jaredriver/image/upload/v1645521514/profile1_ssfnor.png" ||
						"../public/profile1.png"
					}
					alt='profile image'
					width='350px'
					height='344px'
					className='profileImg rounded-full absolute left-2/4 -translate-y-2/4 -translate-x-2/4 self-center md:mt-10 opacity-0'
				/>
				<div className='flex '></div>
			</div>
		</div>
	);
}

export default LandingPage;
