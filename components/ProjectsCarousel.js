import React from "react";
import Carousel from 'react-material-ui-carousel'
import Link from "next/link";
import Image from "next/image";


function ProjectsCarousel({ data }) {

	const style = {
			color: '#A9A9A9'
	}

	return (
		<>
			{data && (
					<Carousel 
					navButtonsAlwaysVisible={true}
					navButtonsProps={{style}}>
				{data.map((project, i) => (
					<div className="previewWrapper grid grid-cols-3 sm:grid-cols-5 items-center" key={i}>
							<div className='flex flex-col text-right space-y-5'>
								<div className="space-y-1 flex flex-col text-right">
								{project.name.split(" ").map((word) => (
										<h2
											className='hover:text-theme-blue-dark hover:cursor-default'
											key={word}>
											{word}
										</h2>
									))}
								</div>
									
										<Link href={project.slug.current}>
											<a className="hover:text-theme-blue-dark hover:cursor-pointer">
												<h2 key='about'>ABOUT</h2>
												<h2 key='this'>THIS</h2>
												<h2 key='site'>SITE</h2>
											</a>
										</Link>
							</div>
							<div className='flex justify-center hover:cursor-pointer transition ease-in-out delay-50 hover:scale-105 content-center sm:col-start-2 sm:col-end-5'>
								<a href={project.URL.site}>
								<img
									height={project.cover.asset.dimensions.height}
									width={project.cover.asset.dimensions.width}
									src={project.cover.asset.url}
									alt={project.name}
									className='rounded-md'
									title={project.name}
								/>
								</a>
							</div>
							
					</div>
							
					))}
					</Carousel>
			)}
		</>
	);
}

export default ProjectsCarousel;
