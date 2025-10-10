import { useAuthStore } from "@/store/authStore";

export const createMessage = async (form) => {
    const { token } = useAuthStore.getState();
    const response = await fetch('/api/messages', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    console.log("Message created:", data);
};

export const fetchAllMessages = async  () => {
    const { token } = useAuthStore.getState();
    const response = await fetch('/api/messages', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch messages');
    }
    const data = await response.json();
    console.log("Messages fetched:", data);
};

export const fetchMessagesByConversation = async (conversationId) => {
    const { token } = useAuthStore.getState();
    const response = await fetch(`/api/messages?conversationId=${conversationId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch messages for conversation');
    }
    const data = await response.json();
    console.log(`Messages for conversation ${conversationId} fetched:`, data);
};