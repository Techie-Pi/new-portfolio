import React from "react";

import TopText from "../components/TopText";
import TopLinks from "../components/TopLinks";
import TopIntroduction from "../components/TopIntroduction";
import Link from "../components/Link";

function Landing() {
    return (
        <div>
            <a href="/">
                <h1
                        className="tracking-wide text-center my-4 dark:text-amber-50"
                        style={{ fontWeight: 100, fontSize: "80px", fontFamily: "Lato, sans-serif" }}
                >
                    TechiePi
                </h1>
            </a>

            <div className="text-center my-10">
                <Link className="px-8" href="https://twitter.com/Techie_Pi">Twitter</Link>
                <Link className="px-8" href="https://www.twitch.tv/TechiePi">Twitch</Link>
                <Link className="px-8" href="https://www.github.com/Techie-Pi">GitHub</Link>
                <Link className="px-8" blank={false} href="/projects">Projects</Link>
                <Link className="px-8" href="https://github.com/Techie-Pi/new-portfolio">Source Code</Link>
            </div>

            <div className="font-display">
                <p className="dark:text-amber-50 text-center my-5 tracking-tight">
                    Hi! I am a 15 year old girl that started programming since I can remember.
                </p>
                <p className="dark:text-amber-50 text-center my-5">
                    Right now I am working on some interesting and innovative projects, you can see some of them at <Link blank={false} href="/projects">Projects</Link>
                </p>
                <p className="dark:text-amber-50 text-center my-5">
                    I love cryptography and cybersecurity. In my free time I like to participate and organize activities like ARGs and similar things.
                </p>
            </div>
        </div>
    )
}

export default Landing;
