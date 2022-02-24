import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "../node_modules/gsap/dist/gsap.js";

function NavigationMenu() {
	const menuPages = [
		{ link: "/about", label: "ABOUT" },
		{ link: "/projects", label: "PROJECTS" },
		{ link: "/blog", label: "BLOG" },
		{ link: "/more", label: "MORE" },
		{ link: "contact-me", label: "CONTACT ME" },
	];

	useEffect(() => {
		gsap.to(".navMenu", {
			duration: 1,
			ease: "power1.inOut",
			x: 50,
		});
	}, []);

	return (
		<ul className='w-full d-flex flex-row'>
			{menuPages.map((item) => (
				<Link key={item.link} href={item.link}>
					<li className='navMenu text-black font-medium text-xl hover:text-theme-blue-dark cursor-pointer'>
						{item.label}
					</li>
				</Link>
			))}
		</ul>
	);
}

export default NavigationMenu;
