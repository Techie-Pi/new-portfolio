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
        title: "Dreamer",
        description: "Another music/general purpose Discord bot with amazing features",
        link: "https://github.com/KernelFreeze/dreamer",
        image: "/projects/dreamer.png",
        techStack: "Rust, Python",
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
        title: "EtheryalOS",
        description: "A lightweight and safe OS with native WebAssembly native support",
        link: "https://github.com/etheryalOS",
        image: "/projects/etheryalos.jpg",
        techStack: "Rust, WASM",
        type: "collaborator"
    },
    {
        title: "Davinci",
        description: "A simple and fast image download and caching library for Unity",
        link: "https://github.com/shamsdev/davinci",
        image: "/projects/davinci.png",
        techStack: "C#, Unity",
        type: "collaborator"
    },
    {
        title: "Waffle",
        description: "A domain-trust checker",
        link: "https://github.com/Techie-Pi/waffle",
        image: "https://github.com/Techie-Pi/waffle/raw/main/docs/logo.png",
        techStack: "JavaScript",
        type: "owner"
    },
    {
        title: "SkeleticMobs",
        description: "My first Minecraft plugin and OSS project. Used to apply at Minplay",
        link: "https://github.com/Techie-Pi/SkeleticMobs",
        image: "/projects/skeleticmobs.png",
        techStack: "Java, Spigot",
        type: "owner"
    },
    {
        title: "Soundy",
        description: "A simple and battle-tested sound library",
        link: "https://github.com/Techie-Pi/soundy",
        image: "/projects/dreamer.png",
        techStack: "JavaScript",
        type: "owner"
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
            <div className="p-4 md:w-1/3 lg:w-1/4 w-full">
                <div className="h-full border-2 border-black-800 rounded-lg overflow-hidden">
                    <img
                            className="lg:h-48 md:h-36 h-32 w-full object-cover object-center"
                            src={image}
                            alt={title}
                    />
                    <div className="p-6">
                        <h2 className="tracking-wide text-xs title-font font-medium text-gray-500 mb-1">
                            {techStack ? `${techStack} | `: ""}{types[type]}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                            {title}
                        </h1>
                        <p className="leading-relaxed text-amber-50 mb-3">
                            {description}
                        </p>
                        <div className="flex items-center flex-wrap">
                            <a href={link} className={`text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0`}>
                                Read More
                                <svg
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                1.2K
                            </span>
                            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                6
                            </span>
                        </div>
                    </div>
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
