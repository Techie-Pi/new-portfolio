import React from "react";

function Link({ href, children, blank=true, className }) {
    return (
            <a
               href={href}
               className={"dark:text-amber-50 uppercase font-semibold tracking-wider transition-all duration-[350ms] ease-in hover:dark:text-indigo-300" + " " + className}
               style={{ fontFamily: "Lato, sans-serif" }}
               rel="noopener noreferrer"
               target={blank ? "_blank" : "_self"}
            >
                {children}
            </a>
    )
}

export default Link;
