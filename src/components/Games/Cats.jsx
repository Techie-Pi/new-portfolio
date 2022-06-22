import {BaseGame} from "./index";
import {useEffect, useRef, useState} from "react";

function CatsGame() {
    const [catImage, setCatImage] = useState("/cats/initial.png");

    const imgClickHandler = () => {
        const src = `/cats/cat${Math.round(Math.random() * 21)}.gif`;
        if (src === catImage) {
            imgClickHandler();
            return;
        }

        setCatImage(src)
    }

    return (
        <BaseGame id="cats" title="Cats 😼" description="Try clicking the image!">
            <div className="w-[100%] flex justify-center">
                <img
                        onClick={imgClickHandler}
                        className="hover:cursor-pointer"
                        alt="Funny cat GIF"
                        height={300}
                        width={300}
                        src={catImage}
                />
            </div>
        </BaseGame>
    )
}

export default CatsGame;
