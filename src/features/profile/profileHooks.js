import { useQuery, useMutation } from "@tanstack/react-query";
import { updateProfile, uploadAvatar, fetchPublicProfile, refetchProfile } from "./profileApi";


export const useGetPublicProfile = (id) => {
    return useQuery({
        queryKey: ['publicProfile', id],
        queryFn: () => fetchPublicProfile(id),
        enabled: !!id,
    });
}

//Will be used to refetch profile data after update
export const useRefetchProfile = () => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: () => refetchProfile(),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

export const useUploadAvatar = () => {
    return useMutation({
        mutationFn: (file) => uploadAvatar(file),
    });
}

export const useUpdateProfile = () => {
    return useMutation({
        mutationFn: (form) => updateProfile(form),
    });
}