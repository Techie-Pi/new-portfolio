import React from "react";
import Link from "../Link";

function TopLinks() {
    const linkClassNames = "px-8"
    return (
            <div className="text-center my-10">
                <Link className={linkClassNames} href="https://twitter.com/Techie_Pi">Twitter</Link>
                <Link className={linkClassNames} href="https://www.twitch.tv/TechiePi">Twitch</Link>
                <Link className={linkClassNames} href="https://www.github.com/Techie-Pi">GitHub</Link>
                <Link className={linkClassNames} blank={false} href="/projects">Projects</Link>
                <Link className={linkClassNames} href="https://github.com/Techie-Pi/new-portfolio">Source Code</Link>
            </div>
    )
}

export default TopLinks;
