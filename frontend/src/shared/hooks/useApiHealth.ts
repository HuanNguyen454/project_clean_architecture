import { useQuery } from '@tanstack/react-query';
import { getSystemInfo } from '../services/apiClient';

export function useApiHealth() {
  const query = useQuery({
    queryKey: ['system-info'],
    queryFn: ({ signal }) => getSystemInfo(signal),
  });

  return {
    status: query.isPending ? 'loading' : query.isError ? 'error' : 'ready',
    data: query.data,
    error: query.error,
  } as const;
}
