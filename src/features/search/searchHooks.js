import { searchUsers } from "./searchApi";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (query) => {
    return useQuery({
        queryKey: ['search', query],
        queryFn: () => searchUsers(query),
        enabled: !!query,
    })
}