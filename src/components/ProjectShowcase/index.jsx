import React from "react";

const projects = [
    {
        title: "Kernelcraft",
        description: "An awesome and innovative Minecraft Network",
        link: "https://twitter.com/kernelcrafty",
        image: "/projects/kernelcraft.png",
        techStack: "Java, Sponge",
        type: "collaborator"
    },
    {
        title: "Minplay",
        description: "A Minecraft Network",
        link: "https://twitter.com/minplayserver",
        image: "/projects/minplay.jpg",
        type: "collaborator"
    },
    {
        title: "Privalytics",
        description: "Open source, privacy-friendly and simple analytics",
        link: "https://github.com/vocalizando/privalytics",
        image: "https://github.com/Techie-Pi/waffle/raw/main/docs/logo.png",
        techStack: "Rust",
        type: "owner"
    },
    {
        title: "EtheryalOS",
        description: "A lightweight and safe OS with native WebAssembly native support",
        link: "https://github.com/etheryalOS",
        image: "/projects/etheryalos.jpg",
        techStack: "Rust, WASM",
        type: "collaborator"
    },
    {
        title: "Not Paid Reloaded",
        description: "A complete revamp of the original kleampa/not-paid with on-the-fly support",
        link: "https://github.com/Techie-Pi/not-paid-reloaded",
        image: "/projects/notpaidreloaded.png",
        techStack: "JavaScript, Node",
        type: "owner"
    }
]

const types = { collaborator: "Collaborator/Contributor", owner: "Owner" };

/**
 *
 * @param title
 * @param description
 * @param link
 * @param image
 * @param techStack
 * @param type{"collaborator"|"owner"}
 * @return {JSX.Element}
 * @constructor
 */
function Project({ title, description, link, image, techStack, type }) {
    return (
            <div
                    className="block p-6 md:mx-16 md:my-12 max-w-sm transition-all rounded border shadow-md dark:bg-[#010509] dark:border-gray-800"
            >
                <a href={link} rel="noreferrer noreferrer" target="_blank">
                    <img className="rounded-t-lg" src={image} alt={description}/>
                </a>
                <div className="p-5">
                    <h5
                            className="mb-2 text-2xl font-bold tracking-wider dark:text-white"
                            style={{ fontFamily: "Lato, sans-serif" }}
                    >
                        {title}
                    </h5>
                    <p className="font-normal dark:text-gray-400">
                        {description}
                    </p>
                    <p className="font-normal mt-3.5 dark:text-gray-500">
                        {types[type]}{techStack ? ` | ${techStack}` : ""}
                    </p>
                    <a
                            href={link}
                            className="inline-flex items-center mt-3 -mx-1 py-2 px-3 text-sm font-medium text-center text-white transition-all rounded focus:ring-4 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:focus:ring-indigo-800"
                            rel="noopener noreferrer"
                            target="_blank"
                    >
                        Read more
                    </a>
                </div>
            </div>
    )
}

function ProjectShowcase() {
    const keys = Object.keys(projects);
    const projectsRendered = keys.map(key => {
        const project = projects[key];

        return <Project title={project.title} description={project.description} type={project.type}
                        image={project.image} link={project.link} techStack={project.techStack}/>
    });

    return (
        <div>
            <div className="flex flex-wrap place-content-between items-center">
                {projectsRendered}
            </div>
            <div className="dark:text-amber-50 text-center w-[99vw] my-7">
                Thanks to <a className="text-indigo-500" href="https://fontawesome.com/license" rel="noreferrer noreferrer" target="_blank">Font Awesome</a> for the icons of some projects!
            </div>
        </div>
    )
}

export default ProjectShowcase;
