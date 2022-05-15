import React from "react";
import github from "../public/github.svg";
import Image from "next/image";
import linkedin from "../public/linkedin.svg";
import instagram from "../public/instagram.svg";

function Footer() {
	return (
		<footer className='w-screen h-[20%]'>
			<div className='flex justify-center items-center'>
				<div className='icons flex space-x-3'>
					<a
						href='https://www.github.com/jaredrivers '
						target='_blank'
						rel='noreferrer'
						title='Link to Github profile '>
						<div className='min-h min-w-[48px] block w-[12%]'>
							<Image
								src={github}
								className='cursor-pointer'
								layout='responsive'
								width={48}
								height={48}
							/>
						</div>
					</a>
					<a
						href='https://www.linkedin.com/in/jared-fischer'
						target='_blank'
						rel='noreferrer'
						title='Link to LinkedIn profile'>
						<div className='min-h-[48px] min-w-[48px] block w-[12%]'>
							<Image
								src={linkedin}
								className='cursor-pointer'
								layout='responsive'
								width={48}
								height={48}
							/>
						</div>
					</a>
					<a
						href='https://www.instagram.com/jared_river/'
						target='_blank'
						rel='noreferrer'
						title='Link to Instagram profile'>
						<div className='min-h min-w-[48px] block w-[12%]'>
							<Image
								src={instagram}
								className='cursor-pointer'
								layout='responsive'
								width={48}
								height={48}
							/>
						</div>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
