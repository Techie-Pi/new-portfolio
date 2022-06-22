import {BaseGame} from "./index";

function MeowSynthGame() {
    return (
        <BaseGame id="meow-synth" title="Meowsynth Gangsta Paradise" description="😼🤝">
            <div className="w-[100%] flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xracqnpLmX8"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        </BaseGame>
    )
}

export default MeowSynthGame;
