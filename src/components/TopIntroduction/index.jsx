import React from "react";
import Link from "../Link";

function TopIntroduction() {
    const pClassName = "dark:text-amber-50 text-center my-5 tracking-tighter";

    return (
            <div>
                <p className={pClassName}>
                    Hi! I am a 16 year old girl that started programming since I can remember.
                </p>
                <p className={pClassName}>
                    Right now I am working on some interesting and innovative projects, you can see some of them at <Link blank={false} href="/projects">Projects</Link>
                </p>
                <p className={pClassName}>
                    I love cryptography and cybersecurity. I'm (trying) to learn Esperanto. In my free time I like to participate and organize activities like ARGs and similar things.
                </p>
            </div>
    )
}

export default TopIntroduction;
