import { api } from '@/common';
import { Book } from '@/models';

export async function fetchBook(id: number): Promise<Book> {
  const { data } = await api.get<Book>(`/book/${id}`);
  return data;
}
