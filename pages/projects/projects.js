import React from "react";
import ProjectsCarousel from "../../components/ProjectsCarousel";

function Projects({ data, url, techItems }) {
	return (
		<div
			id='projects'
			className='min-h-screen w-screen overflow-x-scroll scrollbar-hide flex items-center z-0'>
			<ProjectsCarousel data={data} url={url} techItems={techItems} />
		</div>
	);
}

export default Projects;
