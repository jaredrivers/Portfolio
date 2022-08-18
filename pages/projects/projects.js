import React from "react";
import ProjectsCarousel from "../../components/ProjectsCarousel";

function Projects({ data }) {
	return (
		<div
			id='projects'
			className=' w-screen scrollbar-hide flex items-center z-0 justify-center  max-w-[1920px]'>
			<ProjectsCarousel data={data} />
		</div>
	);
}

export default Projects;
