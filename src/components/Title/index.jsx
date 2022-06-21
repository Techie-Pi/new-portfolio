import React from "react";

function Title({ children }) {
    return (
            <h3
                className="tracking-wide text-3xl text-center font-bold my-4 dark:text-gray-100 font-normal font-['Lato']"
            >
                {children}
            </h3>
    )
}

export default Title;
