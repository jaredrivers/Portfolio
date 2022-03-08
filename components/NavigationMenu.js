import React, { useEffect } from "react";
import { gsap } from "../node_modules/gsap/dist/gsap.js";
import { Link } from "react-scroll";

function NavigationMenu() {
	const menuPages = [
		{ id: "landingPage", link: "/", label: "TOP" },
		{ id: "about", link: "/about", label: "ABOUT" },
		{ id: "projects", link: "/projects", label: "PROJECTS" },
		{ id: "blog", link: "/blog", label: "BLOG" },
		{ id: "more", link: "/more", label: "MORE" },
		{ id: "contactMe", link: "contact-me", label: "CONTACT ME" },
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
				<Link
					key={item.id}
					activeClass='text-theme-blue-dark'
					to={item.id}
					smooth={true}
					duration={1000}
					spy={true}>
					<li className='navMenu font-medium text-xl hover:text-theme-blue-dark cursor-pointer'>
						{item.label}
					</li>
				</Link>
			))}
		</ul>
	);
}

export default NavigationMenu;
