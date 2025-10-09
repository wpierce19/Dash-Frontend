import { useMutation, useQuery } from "@tanstack/react-query";
import { createMessage, fetchAllMessages, fetchMessagesByConversation } from "./messageApi";

export const useCreateMessage = () => {
    return useMutation({
        mutationFn: (form) => createMessage(form),
    });
};

export const useFetchAllMessages = () => {
    return useQuery({
        queryKey: ['allMessages'],
        queryFn: () => fetchAllMessages(),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

export const useFetchMessagesByConversation = (conversationId) => {
    return useQuery({
        queryKey: ['messages', conversationId],
        queryFn: () => fetchMessagesByConversation(conversationId),
        enabled: !!conversationId,
    });
};