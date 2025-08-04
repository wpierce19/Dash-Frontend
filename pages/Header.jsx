import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import defaultAvatar from "../src/assets/defaultAvatar.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    //placeholder var
    const place = null;

    //Logic for dropdown menu in header
    useEffect(() => {
        const handleClickOutisde = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutisde);
        return () => document.removeEventListener("mousedown", handleClickOutisde);
    }, []);

    //Avatar fallback
    return (
        <header
            className="fixed top-0 left-0 z-50 w-full text-white py-3 px-6 flex items-center justify-end"
            style={{backgroundColor: "red"}}
        >
            <nav className="lex items-center gap-6 text-lg font-semibold mr-4">
                <Link to="/">Home</Link>
                <Link to="/inprogress">Messages</Link>
            </nav>

            <div
                className="relative"
                ref={menuRef}
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                <button className="flex items-center focus:outline-none">
                    <img 
                        src={defaultAvatar}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover border border-white"
                    />
                </button>

                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md z-50">
                        {/*This is where the user will be checked to see if logged in*/}
                        {place ? (
                            <>
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Profile
                                </Link>
                                {/*Button for dark/light mode*/}
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Theme</button>
                                <button
                                    onClick={() => {
                                        setMenuOpen(false);
                                        {/*handleLogout()*/}
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Login
                                </Link>

                                {/*Button for dark/light mode*/}
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Theme</button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </header>
    )
};

export default Header;