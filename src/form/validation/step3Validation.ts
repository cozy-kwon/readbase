import z from 'zod';

import { ReadingForm } from '@/form';

export function step3Validation(value: ReadingForm, ctx: z.RefinementCtx) {
  const { rating, review } = value;

  // 별점이 1점 이하 또는 5점일 때 독후감 필수
  const isReviewRequired = rating <= 1 || rating === 5;

  if (isReviewRequired) {
    // 독후감이 없거나 100자 미만인 경우
    if (review == null || review.trim().length < 100) {
      ctx.addIssue({
        code: 'custom',
        path: ['review'],
        message: '별점이 1점 이하 또는 5점인 경우 독후감을 최소 100자 이상 작성해 주세요.',
      });
    }
  }
}
