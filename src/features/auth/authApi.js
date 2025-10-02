import { create } from "zustand";
import {persist} from "zustand/middleware";

export const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            user: null,
            setAuth: (token, user) => set({ token, user }),
            clearAuth: () => set({ token: null, user: null }),
        }),
        { name: "auth-storage" } //used by localstrage
    )
);

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