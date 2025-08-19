

export default function ComposeButton({avatarURL, placeholder="What's on your mind?", onClick}) {
    return (
        <div className="bg-[#252728] w-120 h-20 flex items-center rounded-2xl">
            <button
                type="button"
                onClick={onClick}
                className={[
                    //Layout
                    "w-full h-12 px-4 pr-5 flex items-center gap-3 m-5",
                    //shape
                    "rounded-full",
                    //colors
                    "bg-[#333334]",
                    //text color
                    "text-[color:var(--tt-text-secondary)]",
                    //hover
                    "hover:bg-[#6E7073]",
                    //subtle border
                    "border border-[var(--tt-border-color)]/60",
                    //focus ring
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tt-link-color)]",
                    //smoot feel
                    "transition-colors",
                    //cursor change
                    "hover:cursor-pointer",
                    //
                ].join(" ")}
                aria-label={placeholder}
            >
                <img 
                    src={avatarURL}
                    alt="Avatar Image"
                    className="h-9 w-9 rounded-full object-cover"
                    draggable="false"
                />
                <span className="truncate">{placeholder}</span>
            </button>
        </div>
    )
}