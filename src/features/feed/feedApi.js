//place api functions here for feed fetching
import { useAuthStore } from "@/store/authStore";

export const getFriendsPosts = async () => {
    const { token } = useAuthStore.getState();
    if (!token) {
        throw new Error('User not authenticated');
    }
    try {
        const response = await fetch('/api/friends/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch friends posts');
        }
        const data = await response.json();
        console.log('Friends posts fetched:', data);
    }
    catch (error) {
        console.error('Error fetching friends posts:', error);
    }
}