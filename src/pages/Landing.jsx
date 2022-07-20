import React, {useEffect, useState} from "react";

import Link from "../components/Link";
import TopBar from "../components/TopBar";
import {GamesContainer} from "../components/Games";
import CatsGame from "../components/Games/Cats";
import MeowSynth from "../components/Games/MeowSynth";
import MeowSynthGame from "../components/Games/MeowSynth";

const GAMES_IDS = [
    "cats",
    "meow-synth",
]

const randomId = (array) => {
    return array[Math.round(Math.random() * (array.length - 1))]
}

function Landing() {
    useEffect(() => {
        const stylesheet = document.createElement("style")
        stylesheet.id = "no-scrolling-stylesheet"
        stylesheet.innerHTML = "html { height: 100%; overflow-y: hidden; }"
        document.head.appendChild(stylesheet)

        return () => {
            document.getElementById("no-scrolling-stylesheet").remove()
        }
    }, [])

    return (
        <div id="top" className="flex flex-col justify-center">
            <TopBar/>
            <div className="mx-auto md:w-[50vw] sm:w-[90vw]">
                <div className="font-display">
                    <p className="text-amber-50 text-center my-5 tracking-tight">
                        Hi! I am a random 16 year old girl that started programming a long time ago.
                    </p>
                    <p className="text-amber-50 text-center my-5">
                        Right now I am working on some interesting and innovative projects, you can see some of them at <Link blank={false} href="/projects">Projects</Link>.
                    </p>
                    <p className="text-amber-50 text-center my-5">
                        <Link blank={true} href="//github.com/rust-lang/rust">Rust</Link> is great. I like ARGs and I am a huge fan of <Link blank={true} href="//en.wikipedia.org/wiki/Constructed_language">conlangs</Link>.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                document.getElementById(randomId(GAMES_IDS)).scrollIntoView({ behavior: "smooth" })
                            }}
                            className="px-3 py-1.5 bg-slate-200 rounded-md"
                        >
                            Random.
                        </button>
                    </div>
                </div>
            </div>

            <GamesContainer>
                <CatsGame/>
                <MeowSynthGame/>
            </GamesContainer>
        </div>
    )
}

export default Landing;
