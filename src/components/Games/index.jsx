function GamesContainer({ children }) {
    return (
        <div className="mt-[200vh] flex flex-col">
            {children}
        </div>
    )
}

function BaseGame({ id, title, description, children }) {
    return (
        <div id={id} className="m-auto mt-[100vh] md:w-[50vw] w-[90%] p-5 border-2 border-black-800 rounded-lg overflow-hidden text-amber-50">
            <div className="flex justify-between">
                <div>
                    <h2 className="tracking-wide text-xs title-font font-medium text-gray-500 mb-1">
                        {description}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {title}
                    </h1>
                </div>
                <div>
                    <button
                            onClick={() => {
                                document.getElementById("top").scrollIntoView({ behavior: "smooth" })
                            }}
                            className="px-3 py-1.5 mb-5 text-black bg-slate-200 rounded-md font-display"
                    >
                        &uarr; Go to top
                    </button>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export { GamesContainer, BaseGame };
