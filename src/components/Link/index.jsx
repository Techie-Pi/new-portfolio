import React from "react";

function Link({ href, children, blank=true, className }) {
    return (
            <a
               href={href}
               className={"text-amber-50 underline transition-all duration-[350ms] hover:cursor-pointer ease-in hover:dark:text-amber-200" + " " + className}
               rel="noopener noreferrer"
               target={blank ? "_blank" : "_self"}
            >
                {children}
            </a>
    )
}

export default Link;
