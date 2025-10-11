//API calls for authentication
import { useAuthStore } from "@/store/authStore";

export const createUser = async (newUser) => {
    const response = await fetch('/api/newUsers', {
        method: 'POST',
        body: JSON.stringify({
            username: newUser.username,
            password: newUser.password,
            email: newUser.email,
        }),
        headers: {'Content-Type': 'application/json'},
    })
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Failed to create user');
    }
    console.log("User created:", data);

    //Save JWT token & user globally
    const {token, user} = data;
    if (token && user) {
        const {setAuth} = useAuthStore.getState(); //access the store outside of react
        setAuth(token, user);
    }
}

export const loginUser = async (credentials) => {
try {
    const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to login');
    }

    const data = await response.json();

    // Fetch user data using token
    const userResponse = await fetch('/api/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`,
        },
    });

    if (!userResponse.ok) {
        const errorData = await userResponse.json();
        throw new Error(errorData.message || 'Failed to fetch user data');
    }

    const userData = await userResponse.json();
    console.log('User logged in:', userData);

    //Save JWT token & user globally
    const { token } = data;
    const user = userData;

    if (token && user) {
        const { setAuth } = useAuthStore.getState(); // Access Zustand outside React
        setAuth(token, user);
    }

} catch (error) {
    console.error('Login error:', error);
    throw error;
} finally {
    console.log('Login process completed.');
}
    
}