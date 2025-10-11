import { Link, Navigate } from "react-router-dom";
import FieldInfo from "utils/fieldInfo";
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
        confirm_Password: '',
    },
    onSubmit: async (value) => {
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

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-gray-100 dark:bg-gray-500 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Register:</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    e.prventPropagation();
                    form.handleSubmit(e);
                }}>
                    <div className="mb-4">
                        <form.Field
                            name="username"
                            validators={{
                                onChange: ({value}) => 
                                    !value
                                    ? "Username is required"
                                    : value.length < 3
                                        ? "Username must be at least 3 characters"
                                        : undefined,
                                onChangeAsyncDebounceMs: 500,
                                onChangeAsync: async ({value}) => {
                                    if (!value) return "Username is required";
                                    const response = await fetch(`/api/users/exists?username=${value}`);
                                    const data = await response.json();
                                    return data.exists ? "Username already taken" : undefined;
                                },
                            }}
                            children={(field) => {
                                return (
                                    <>
                                        <div className="flex justify-between">
                                            <label className="block text-black dark:text-white mb-1" htmlFor="username">Username</label>
                                            <input 
                                                className="bg-amber-50 text-white"
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                            />
                                            <div 
                                                style={{
                                                    width: '200px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    overflow: 'didden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis'
                                            }}>
                                                <div style={{minHeight: '1.5rem', display: 'flex', alignItems: 'center'}}>
                                                    <FieldInfo field={field}/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }}
                        />
                    </div>
                    <div className="mb-4">
                            <form.Field
                                name="email"
                                validators={{
                                    onChange: ({value}) => 
                                        !value.includes("@")
                                        ? " Valid email is required"
                                        : undefined,
                                    onChangeAsyncDebounceMs: 500,
                                    onChangeAsync: async ({value}) => {
                                        if (!value) return "Email is required";
                                        const response = await fetch(`/api/users/exists?email=${value}`);
                                        const data = await response.json();
                                        return data.exists ? "Email already in use" : undefined;
                                    },
                                }}
                                children={(field) => {
                                    return (
                                        <>
                                            <div className="flex justify-between">
                                                <label className="block text-black dark:text-white mb-1" htmlFor="username">Username</label>
                                                <input 
                                                    className="bg-amber-50 text-white"
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                />
                                                <div 
                                                    style={{
                                                        width: '200px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        overflow: 'didden',
                                                        whiteSpace: 'nowrap',
                                                        textOverflow: 'ellipsis'
                                                }}>
                                                    <div style={{minHeight: '1.5rem', display: 'flex', alignItems: 'center'}}>
                                                        <FieldInfo field={field}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }}
                            />
                    </div>
                    <div className="mb-4">
                        <form.Field
                            name="email"
                            validators={{
                                onChange: ({value}) => 
                                    !value.includes("@")
                                    ? " Valid email is required"
                                    : undefined,
                                onChangeAsyncDebounceMs: 500,
                                onChangeAsync: async ({value}) => {
                                    if (!value) return "Email is required";
                                    const response = await fetch(`/api/users/exists?email=${value}`);
                                    const data = await response.json();
                                    return data.exists ? "Email already in use" : undefined;
                                },
                            }}
                            children={(field) => {
                                return (
                                    <>
                                        <div className="flex justify-between">
                                            <label className="block text-black dark:text-white mb-1" htmlFor="username">Username</label>
                                            <input 
                                                className="bg-amber-50 text-white"
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                            />
                                            <div 
                                                style={{
                                                    width: '200px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    overflow: 'didden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis'
                                            }}>
                                                <div style={{minHeight: '1.5rem', display: 'flex', alignItems: 'center'}}>
                                                    <FieldInfo field={field}/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <form.Field
                            name="password"
                            validators={{
                                onChange: ({value}) => 
                                    !value
                                    ? "Password is required"
                                    : value.length < 3
                                        ? "Password must be at least 3 characters"
                                        : undefined,
                                onChangeAsyncDebounceMs: 500,
                            }}
                            children={(field) => {
                                return (
                                    <>
                                        <div className="flex justify-between">
                                            <label className="block text-black dark:text-white mb-1" htmlFor="username">Username</label>
                                            <input 
                                                className="bg-amber-50 text-white"
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                            />
                                            <div 
                                                style={{
                                                    width: '200px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    overflow: 'didden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis'
                                            }}>
                                                <div style={{minHeight: '1.5rem', display: 'flex', alignItems: 'center'}}>
                                                    <FieldInfo field={field}/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }}
                        />
                    </div>
                                        <div className="mb-4">
                        <form.Field
                            name="confirm_Password"
                            validators={{
                                onChangeListenTo: ['password'],
                                onChange: ({value, fieldApi}) => {
                                    if (value !== fieldApi.getFieldValue('password')) {
                                        return "Passwords do not match";
                                    }
                                    return undefined;
                                },
                            }}
                            children={(field) => {
                                return (
                                    <>
                                        <div className="flex justify-between">
                                            <label className="block text-black dark:text-white mb-1" htmlFor="username">Username</label>
                                            <input 
                                                className="bg-amber-50 text-white"
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                            />
                                            <div 
                                                style={{
                                                    width: '200px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    overflow: 'didden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis'
                                            }}>
                                                <div style={{minHeight: '1.5rem', display: 'flex', alignItems: 'center'}}>
                                                    <FieldInfo field={field}/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}


export default UserRegister;