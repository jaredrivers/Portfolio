import React from "react";
import Hamburger from "hamburger-react";
import Link from 'next/link'

function Navbar({ isOpen, setOpen }) {
	const menuPages = [
		{ id: "landingPage", href: "/#landing-page", label: "TOP" },
		{ id: "about", href: "/#about", label: "SKILLS" },
		{ id: "projects", href: "/#projects", label: "PROJECTS" },
		{ id: "contactMe", href: "/#contact-me", label: "CONTACT ME" },
	];

	return (
		<div className='navbar w-screen h-auto fixed top-0 2xl:top-5 z-50'>
			<div className='grid justify-items-stretch w-inherit px-3'>
				<div className='flex flex-col-reverse items-end md:flex-row md:items-center md:justify-end'>
					{isOpen && (
						<ul className='grid justify-items-end md:flex md:items-center md:space-x-2 mix-blend-exclusion'>
							{menuPages.map((item) => (
								<Link
									key={item.id}
									href={item.href}>
									<li className='font-medium hover:text-theme-blue-dark md:bg-transparent cursor-pointer'>
										{item.label}
									</li>
								</Link>
							))}
						</ul>
					)}
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
