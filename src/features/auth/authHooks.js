import { useQuery, useMutation } from "@tanstack/react-query";
import { createUser, loginUser } from "./authApi";

export const useGetUser = (crdentials) => {
    return useQuery({
        queryKey: ['user', crdentials],
        queryFn: () => loginUser(crdentials),
        enabled: !!crdentials, //only run if crdentials exist
        retry: 1,
        refetchOnWindowFocus: false, //disable refetch on window focus
    })
}

export const useCreateUser = (newUser) => {
    return useMutation({
        mutationFn: () => createUser(newUser),
    })
}