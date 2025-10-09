import { useAuthStore } from "../auth/authApi";

export const searchUsers = async (query) => {
    const { token } = useAuthStore.getState();
    const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Search failed');
    }
};