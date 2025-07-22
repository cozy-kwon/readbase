import { api } from '@/common';
import { Reading } from '@/models';

export async function saveReading(data: Reading): Promise<Reading> {
  const { data: response } = await api.post<Reading>('/reading', data);
  return response;
}

