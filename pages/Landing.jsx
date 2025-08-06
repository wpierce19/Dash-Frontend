import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white text-center">
            <h1 className="txt-4x1 font-bold mb-6 text-blue-700">Welcome to Dash!</h1>
            <p className="mb-8 text-gray-600 max-w-md">
                Your home to connect with colleagues, friends, and family. Signup today and share your life with those you care about! 
            </p>
            <div className="spax-x-4">
                <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
                <button
                    onClick={() => navigate("/register")}
                    className="bg-gray-100 text-blue-600 px-6 py-2 rounded hover:bg-gray-200"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Landing;