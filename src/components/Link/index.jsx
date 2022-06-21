import React from "react";

function Link({ href, children, blank=true, className }) {
    return (
            <a
               href={href}
               className={"text-amber-50 uppercase font-semibold tracking-wider transition-all duration-[350ms] ease-in hover:dark:text-amber-100 font-['Lato']" + " " + className}
               rel="noopener noreferrer"
               target={blank ? "_blank" : "_self"}
            >
                {children}
            </a>
    )
}

export default Link;
