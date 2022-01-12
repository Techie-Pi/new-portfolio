import React from "react";

function Title({ children }) {
    return (
            <h3
                className="tracking-wide text-3xl text-center font-bold my-4 dark:text-gray-100"
                style={{ fontWeight: 300, fontFamily: "Lato, sans-serif" }}
            >
                {children}
            </h3>
    )
}

export default Title;
