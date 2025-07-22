import { api } from '@/common';
import { Reading } from '@/models';
import { ReadingForm } from '@/form';

export async function saveReading(data: ReadingForm): Promise<Reading> {
  const { data: response } = await api.post<Reading>('/reading', data);
  return response;
}

