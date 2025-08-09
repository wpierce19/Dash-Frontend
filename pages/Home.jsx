


const Home = () => {
    return (
        <div className="grid grid-cols-6 min-h-screen pt-1">
            <div className="border border-amber-300 col-span-1 flex justify-center items-start">
                <h1>Online Friends</h1>
            </div>
            <div 
            className="border border-amber-300 col-span-4 grid grid-rows-[1fr_4fr]"
            >
                <div className="border border-amber-300 flex items-center justify-center px-4">
                    <h1>Welcome stuff</h1>
                </div>
                <div className="border border-amber-300 px-4 flex justify-center">
                    <h1>FEED</h1>
                </div>
            </div>
            <div className="border border-amber-300 col-span-1 min-h-screen px-4 flex justify-center items-start">
                <h2>Direct Messages</h2>
            </div>
        </div>
    );
}

export default Home;