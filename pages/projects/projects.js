import React from "react";
import ProjectsCarousel from "../../components/ProjectsCarousel";

function Projects({ data }) {
  return (
    <div
      id="projects"
      className="w-full scrollbar-hide flex"
    >
      <div className="max-w-[1920px] w-full flex flex-col">
        <div className="self-center">
        <p className="text-2xl">PROJECTS</p>
        </div>
        <div>
        <ProjectsCarousel data={data} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
