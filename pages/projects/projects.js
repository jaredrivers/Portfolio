import React from "react";
import ProjectsCarousel from "../../components/ProjectsCarousel";

function Projects({ data }) {
  return (
    <div
      id="projects"
      className="w-full scrollbar-hide flex items-center z-0 justify-center"
    >
      <div className="max-w-[1920px] m-auto">
        {/* <ProjectsCarousel data={data} /> */}
      </div>
    </div>
  );
}

export default Projects;
