import React from "react";
import ProjectsCarousel from "../../components/ProjectsCarousel";

function Projects({ data }) {
	return (
		<div
			id='projects'
			className=' w-screen overflow-x-scroll scrollbar-hide flex items-center z-0 justify-center'>
			<ProjectsCarousel data={data} />
		</div>
	);
}

export default Projects;
