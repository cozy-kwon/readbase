import { useQuery } from '@tanstack/react-query';

import { fetchBook } from '@/apis';

export function useBook(id: number) {
  return useQuery({
    queryKey: ['book', id],
    queryFn: () => fetchBook(id),
    enabled: !!id,
  });
}
