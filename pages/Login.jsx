import { Link } from "react-router-dom";
import { loginUser } from "@/features/auth/authApi";

const Login = () => {
    const email = null;
    const password = null;
    const loginError = null;
    const isSubmitting = null;
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-gray-100 dark:bg-gray-500 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Login:</h1>
                    <form onSubmit={console.log("Submitted")}>
                        <div className="mb-4">
                            <label className="block text-black dark:text-white mb-1" htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                value={email}
                                onChange={console.log("Email success")}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer hover:bg-[#6E7073]"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-black dark:text-white mb-1" htmlFor="password">Password</label>
                            <input 
                                type="password"
                                id="password"
                                value={password}
                                onChange={console.log("password success")}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer hover:bg-[#6E7073]"
                                required
                            />
                        </div>

                        {loginError && (
                            <div className="mb-4 text-red-600 text-sm">{loginError}</div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            {isSubmitting ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-black dark:text-white">
                        Don't have an account? <Link to="/register" className="text-black dark:text-white hover:underline">Register Now</Link>
                    </p>
            </div>
        </div>
    )
}

export default Login;