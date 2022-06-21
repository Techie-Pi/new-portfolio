import React from "react";

import Link from "../components/Link";
import TopBar from "../components/TopBar";

function Landing() {
    return (
        <div className="flex flex-col justify-center">
            <TopBar/>
            <div className="mx-auto md:w-[55vw] sm:w-[90vw]">
                <div className="font-display">
                    <p className="text-amber-50 text-center my-5 tracking-tight">
                        Hi! I am a 15 year old girl that started programming since I can remember.
                    </p>
                    <p className="text-amber-50 text-center my-5">
                        Right now I am working on some interesting and innovative projects, you can see some of them at <Link blank={false} href="/projects">Projects</Link>
                    </p>
                    <p className="text-amber-50 text-center my-5">
                        I love cryptography and cybersecurity. In my free time I like to participate and organize activities like ARGs and similar things.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Landing;
