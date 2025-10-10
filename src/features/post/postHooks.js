import { useMutation, useQuery } from "@tanstack/react-query";
import { getPosts, createPost } from "./postApi";

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