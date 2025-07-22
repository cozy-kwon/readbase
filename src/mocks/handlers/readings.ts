import { http, HttpResponse } from 'msw';

import { ReadingForm } from '@/form';

export const readingHandlers = [
  http.post('/reading', async ({ request }) => {
    const data = await request.json() as ReadingForm;

    // TODO: 최소한의 서버 에러 처리?

    return HttpResponse.json(data, { status: 201 });
  }),
];
