import React from "react";
import github from "../public/github.svg";
import Image from "next/image";
import linkedin from "../public/linkedin.svg";

function Footer() {
	return (
		<footer className='w-screen h-[20%]  bottom-10'>
			<div className='p-3 flex justify-center items-cente '>
				<div className='icons flex space-x-3'>
					<a
						href='https://www.github.com/jaredrivers'
						title='Link to Github profile'>
						<Image src={github} className='cursor-pointer' />
					</a>
					<a
						href='https://www.linkedin.com/in/jared-fischer'
						title='Link to LinkedIn profile'>
						<Image src={linkedin} className='cursor-pointer' />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
