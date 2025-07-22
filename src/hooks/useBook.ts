import { useSuspenseQuery } from '@tanstack/react-query';

import { fetchBook } from '@/apis';

export function useBook(id: number) {
  const { data, ...rest } = useSuspenseQuery({
    queryKey: ['book', id],
    queryFn: () => fetchBook(id),
  });

  return {
    book: data,
    ...rest,
  }
}
