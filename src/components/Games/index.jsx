function GamesContainer({ children }) {
    return (
        <div className="mt-[100vh] flex flex-col">
            <div className="flex">
                <span className="m-auto text-white text-red-500">&rarr; &rarr; &rarr; &rarr; &rarr; STOP 🛑🤚 &larr; &larr; &larr; &larr; &larr;</span>
            </div>
            {children}
        </div>
    )
}

function BaseGame({ id, title, description, children }) {
    return (
        <div id={id} className="m-auto mt-[100vh] w-[50vw] p-5 border-2 border-black-800 rounded-lg overflow-hidden text-amber-50">
            <h2 className="tracking-wide text-xs title-font font-medium text-gray-500 mb-1">
                {description}
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
                {title}
            </h1>
            <div>
                {children}
            </div>
        </div>
    )
}

export { GamesContainer, BaseGame };
