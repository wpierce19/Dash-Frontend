//place api functions here for feed fetching
import { useAuthStore } from '../auth/authStore';

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

export const getPosts = async () => {
    const response = await fetch('/api/posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log("Posts fetched:", data);
}

export const createPost = async (newPost) => {
    const { token } = useAuthStore.getState(); // Access Zustand outside React
    if (!token) {
        throw new Error('User not authenticated');
    }
    try {
        const response = await fetch('/api/newPosts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create post');
        }
        const data = await response.json();
        console.log('Post created successfully', data);
    }
    catch (error) {
        console.error('Error creating post:', error);
    }
}