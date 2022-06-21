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
        title: "Privalytics",
        description: "Open source, privacy-friendly and simple analytics",
        link: "https://github.com/vocalizando/privalytics",
        image: "https://github.com/Techie-Pi/waffle/raw/main/docs/logo.png",
        techStack: "Rust",
        stars: 2,
        type: "owner"
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
        stars: 29,
        type: "collaborator"
    },
    {
        title: "Not Paid Reloaded",
        description: "A complete revamp of the original kleampa/not-paid with on-the-fly support",
        link: "https://github.com/Techie-Pi/not-paid-reloaded",
        image: "/projects/notpaidreloaded.png",
        techStack: "JavaScript, Node",
        stars: 2,
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
 * @param stars
 * @param type{"collaborator"|"owner"}
 * @return {JSX.Element}
 * @constructor
 */
function Project({ title, description, link, image, techStack, stars, type }) {
    return (
            <div className="p-4 md:w-1/3 w-full">
                <div className="h-full border-2 border-black-800 rounded-lg overflow-hidden">
                    <img
                            className="lg:h-52 md:h-36 h-32 w-full object-cover object-center"
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
                            {stars ? (
                                <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" fill="currentColor"
                                         data-view-component="true" className="octicon octicon-star inline-block mr-1">
                                            <path fillRule="evenodd"
                                                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                    </svg>
                                    {stars}
                                </span>
                            ) : <></>}
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
                        image={project.image} link={project.link} techStack={project.techStack}
                        stars={project.stars}/>
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
