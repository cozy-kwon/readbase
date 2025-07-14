import { http, HttpResponse } from 'msw';

import { Book } from '@/models';

export const mockBooks: Book[] = [
  {
    id: 1,
    title: '스토너',
    author: '존 윌리엄스, 김승욱',
    totalPages: 396,
    publishedAt: new Date('2015-01-02'),
  },
  {
    id: 2,
    title: '원씽 The One Thing',
    author: '게리 켈러, 제이 파파산, 구세희',
    totalPages: 280,
    publishedAt: new Date('2013-08-30'),
  },
];

export const bookHandlers = [
  http.get('/book/:id', ({ params }) => {
    const id = Number(params.id);
    const matchedBook = mockBooks.find((book) => book.id === id);

    if (!matchedBook) {
      return HttpResponse.json(
        { message: '해당 ID에 해당하는 책이 없습니다.' },
        { status: 404 }
      );
    }

    return HttpResponse.json<Book>(matchedBook);
  }),
];
