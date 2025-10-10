//Place queryhooks here for feed fetching
import { useQuery} from '@tanstack/react-query';
import { getFriendsPosts} from './feedApi';

export const useFriendsPosts = () => {
    return useQuery({
        queryKey: ['friendsPosts'],
        queryFn: () => getFriendsPosts(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: false,
    })
}