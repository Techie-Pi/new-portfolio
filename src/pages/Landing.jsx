import React from "react";

import TopText from "../components/TopText";
import TopLinks from "../components/TopLinks";
import TopIntroduction from "../components/TopIntroduction";

function Landing() {
    return (
        <div>
            <TopText/>
            <TopLinks/>

            <TopIntroduction/>
        </div>
    )
}

export default Landing;
