import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

function Navbar() {
	const [isOpen, setOpen] = useState(false);
	const menuPages = [
		{ id: "landingPage", link: "/", label: "TOP" },
		{ id: "about", link: "/about", label: "ABOUT" },
		{ id: "projects", link: "/projects", label: "PROJECTS" },
		{ id: "blog", link: "/blog", label: "BLOG" },
		{ id: "more", link: "/more", label: "MORE" },
		{ id: "contactMe", link: "contact-me", label: "CONTACT ME" },
	];

	return (
		<div className='navbar w-screen h-auto fixed top-0'>
			<div className='grid justify-items-stretch w-inherit px-3'>
				<div className='flex flex-col-reverse items-end md:flex-row md:items-center md:justify-end'>
					<ul className='grid justify-items-end md:flex md:items-center md:space-x-2 '>
						{menuPages.map((item) => (
							<Link
								key={item.id}
								activeClass='text-red-600'
								to={item.id}
								smooth={true}
								duration={1000}
								spy={true}>
								<li className='font-medium text-xl hover:text-theme-blue-dark cursor-pointer mix-blend-difference'>
									{item.label}
								</li>
							</Link>
						))}
					</ul>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
