import React from "react";

import Title from "../components/Title";
import ProjectShowcase from "../components/ProjectShowcase";
import TopBar from "../components/TopBar";

function Projects() {
    return (
        <div>
            <TopBar/>
            <div className="flex justify-center mb-10">
                <hr className="md:w-[30vw] sm:w-[80vw] block"/>
            </div>
            <Title>Projects</Title>

            <ProjectShowcase/>
        </div>
    )
}

export default Projects;
