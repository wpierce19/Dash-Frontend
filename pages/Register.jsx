import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useCreateUser } from "@/features/auth/authHooks";

const UserRegister = () => {
const createUser = useCreateUser();
const navigate = Navigate();
const form = useForm({
    defaultValues: {
        username: '',
        email: '',
        password: '',
    },
    onSubmit: async (value) => {
        if (value.password !== value.confirmPassword) {
            // Handle password mismatch error (e.g., display error message)
            console.error("Passwords do not match");
            return;
        }
        try {
            const payload = {
                ...value, username: value.username.trim(), email: value.email.trim(), password: value.password.trim()
            };
            await createUser(payload);
            // Handle successful registration (e.g., redirect to login or dashboard)
            navigate('/home');

        } catch (error) {
            // Handle registration error (e.g., display error message)
            if (error instanceof Error) {
                console.error("Registration error:", error.message);
            }
        }
    }
})


    //Placeholder vars
    const handleSignup = null;
    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const signupError = null;
    const isSubmitting = null;
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-gray-100 dark:bg-gray-500 rounded-lg shadow-lg dark:shadow-black">
                <h2 className="text-2x1 font-bold text-center mb-6">Sign Up:</h2>

                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-black dark:text-white mb-1" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={signupData.username}
                            onChange={(e) =>
                            setSignupData({ ...signupData, username: e.target.value })
                            }
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black dark:text-white mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={signupData.email}
                            onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-black dark:text-white mb-1" htmlFor="password">
                            Password
                        </label>
                        <input 
                            type="password"
                            id="password"
                            value={signupData.password}
                            onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-black dark:text-white mb-1" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input 
                            type="password"
                            id="confirmPassword"
                            value={signupData.confirmPassword}
                            onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {signupError && (
                        <div className="mb-4 text-red-600 text-sm">{signupError}</div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        {isSubmitting ? "Signing up..." : "Sign Up"}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-black dark:text-white">
                    Already have an account?{" "}
                    <Link to="/login" className="text-black dark:text-white hover:underline">Login</Link>
                </p>
            </div>
        </div>
    )
}


export default UserRegister;