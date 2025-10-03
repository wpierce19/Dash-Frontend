//Place queryhooks here for feed fetching
import { useQuery, useMutation } from '@tanstack/react-query';
import { getFriendsPosts, getPosts, createPost } from './feedApi';

export const useFriendsPosts = () => {
    return useQuery({
        queryKey: ['friendsPosts'],
        queryFn: () => getFriendsPosts(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: false,
    })
}

export const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => getPosts(),
    })
}

export const useCreatePost = (newPost) => {
    return useMutation({
        mutationFn: () => createPost(newPost),
    })
}