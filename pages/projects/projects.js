import React from "react";
import ProjectsCarousel from "../../components/ProjectsCarousel";

function Projects({ data, url }) {
	return (
		<div
			id='projects'
			className='h-screen w-screen overflow-x-scroll scrollbar-hide flex items-center z-0'>
			<ProjectsCarousel data={data} url={url} />
		</div>
	);
}

export default Projects;
