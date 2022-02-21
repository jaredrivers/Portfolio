import React from "react";
import Link from "next/link";

function NavigationMenu() {
	return (
		<ul className='w-full'>
			<Link href='/about'>
				<li className='hover:text-theme-red cursor-pointer'>ABOUT</li>
			</Link>
			<Link href='/projects'>
				<li className='hover:text-theme-red cursor-pointer'>PROJECTS</li>
			</Link>
			<Link href='/blog'>
				<li className='hover:text-theme-red cursor-pointer'>BLOG</li>
			</Link>
			<Link href='/contact-me'>
				<li className='hover:text-theme-red cursor-pointer w-[9rem] flex flex-nowrap grow'>
					CONTACT ME
				</li>
			</Link>
		</ul>
	);
}

export default NavigationMenu;
