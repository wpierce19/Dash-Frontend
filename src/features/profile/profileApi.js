import { useAuthStore } from "@/store/authStore";

export const updateProfile = async (form) => {
    const { token } = useAuthStore.getState();
    const response = await fetch('/api/me', {
        method: 'PUT',
        body: JSON.stringify(form),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    console.log("Profile updated:", data);
}

export const uploadAvatar = async (file) => {
    const { token } = useAuthStore.getState();
    const formData = new FormData();
    formData.append('avatar', file);

    return fetch('/api/me/avatar', {
        method: 'POST',
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const fetchPublicProfile = async (id) => {
    return fetch(`/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const refetchProfile = async () => {
    const { token } = useAuthStore.getState();
    const response = await fetch('/api/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch user data');
    }
    const user = await response.json();
    localStorage.setItem('user', JSON.stringify(user));
    return user;
};


export const fetchFriends = async () => {
    const { token } = useAuthStore.getState();
    const response = await fetch('/api/me/friends', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch friends');
    }
    const data = await response.json();
    console.log("Friends fetched:", data);
}