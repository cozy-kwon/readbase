import { useMutation } from '@tanstack/react-query';

import { saveReading } from '@/apis';

export function useSaveReading() {
  return useMutation({
    mutationFn: saveReading,
  });
}
