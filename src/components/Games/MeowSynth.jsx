import {BaseGame} from "./index";
import {useEffect, useState} from "react";

function MeowSynthGame() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if(enabled) {
            document.getElementById("meow-synth").scrollIntoView({ behavior: "smooth" })
        }
    }, [enabled])

    if(enabled) {
        return (
                <BaseGame id="meow-synth" title="Meowsynth Gangsta Paradise" description="😼🤝">
                    <div className="w-[100%] flex justify-center">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xracqnpLmX8"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </BaseGame>
        )
    } else {
        return (
                <BaseGame id="meow-synth" title="Meowsynth Gangsta Paradise" description="YouTube iframes are disabled by default 🥴. Click the button to enable this iframe">
                    <button className="px-3 py-1.5 mb-5 text-black bg-slate-200 rounded-md font-display" onClick={() => setEnabled(true)}>Enable YouTube Iframe 😻🤚</button>
                </BaseGame>
        )
    }
}

export default MeowSynthGame;
