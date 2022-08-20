import React from "react";
import ProjectsCarousel from "../../components/ProjectsCarousel";

function Projects({ data }) {
  return (
    <div
      id="projects"
      className="w-full scrollbar-hide flex"
    >
      <div className="max-w-[1920px] w-full items-center justify-center">
        <ProjectsCarousel data={data} />
      </div>
    </div>
  );
}

export default Projects;
