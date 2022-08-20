import React, { useEffect } from "react";
import { gsap } from "../node_modules/gsap/dist/gsap.js";
import Link from 'next/link'

function NavigationMenu() {
	const menuPages = [
		{ id: "landingPage", href: "/", label: "TOP" },
		{ id: "about", href: "/#about", label: "SKILLS" },
		{ id: "projects", href: "/#projects", label: "PROJECTS" },
		{ id: "contactMe", href: "/#contact-me", label: "CONTACT ME" },
	];

	useEffect(() => {
		gsap.to(".navMenu", {
			duration: 1,
			ease: "power1.inOut",
		});
	}, []);

	return (
		<ul className='d-flex flex-row lg:space-y-1 w-max'>
			{menuPages.map((item) => (
				<Link
					key={item.id}
					href={item.href}>
					<li className='navMenu text-xl hover:text-theme-blue-dark cursor-pointer'>
						{item.label}
					</li>
				</Link>
			))}
		</ul>
	);
}

export default NavigationMenu;
