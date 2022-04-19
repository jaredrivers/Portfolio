import React from "react";
import Link from "next/link";
import Image from "next/image";
import petappimg from "../../public/petappimg.png";

function Projects() {
	const petAppUrl = "https://phenomenal-stardust-bc3535.netlify.app/";

	return (
		<div
			id='projects'
			className='h-screen w-screen p-2 flex items-center overflow-scroll md:justify-center'>
			<div className='projects-wrapper flex h-[90%] items-center'>
				<div className='flex flex-col space-y-3 justify-center text-right'>
					<div>
						<h2 className='hover:text-theme-blue-dark hover:cursor-default'>
							PET
						</h2>
						<h2 className='hover:text-theme-blue-dark  hover:cursor-default'>
							ADOPTION
						</h2>
						<h2 className='hover:text-theme-blue-dark  hover:cursor-default'>
							SITE
						</h2>
					</div>
					<div>
						<Link href='/projects/pet-adoption?pid=1 '>
							<div className='hover:text-theme-blue-dark hover:cursor-pointer'>
								<h2 key='about'>ABOUT</h2>
								<h2 key='this'>THIS</h2>
								<h2 key='site'>SITE</h2>
							</div>
						</Link>
					</div>
				</div>
				<div className='pet-app grow flex flex-col items-center hover:cursor-pointer transition ease-in-out delay-50 hover:scale-105 content-center'>
					<a href={petAppUrl} target='_blank'>
						<Image
							src={petappimg}
							alt='Pet Project Link'
							layout='fixed'
							width={536}
							height={425}
							className='rounded-md'
							title='Pet Project Link'
							priority
						/>
					</a>
				</div>
				<div className='pet-app border border-black h-full grow'>Site</div>
			</div>
		</div>
	);
}

export default Projects;
