import z from 'zod';

import { ReadingForm } from '@/form';
import { ReadingStatus } from '@/models';

export function step1Validation(value: ReadingForm, ctx: z.RefinementCtx) {
  const { startAt, finishedAt, publishedAt, status } = value;

  // 1. 날짜 순서
  if (startAt != null && finishedAt != null && startAt > finishedAt) {
    ctx.addIssue({
      code: 'custom',
      path: ['startAt'],
      message: '시작일이 종료일보다 빠르거나 같아야 합니다.',
    });
  }

  // 2. 출판일 이전인지
  if (startAt != null && startAt < publishedAt) {
    ctx.addIssue({
      code: 'custom',
      path: ['startAt'],
      message: '시작일은 출판일 이후여야 합니다.',
    });
  }

  // 3. 독서 상태별 조건 분기
  switch (status) {
    case ReadingStatus.WantToRead:
      if (startAt != null || finishedAt != null) {
        ctx.addIssue({
          code: 'custom',
          path: ['startAt', 'finishedAt'],
          message: '읽고 싶은 책은 시작일과 종료일을 입력할 수 없습니다.',
        });
      }
      break;
    case ReadingStatus.Reading:
    case ReadingStatus.Hold:
      if (startAt == null) {
        ctx.addIssue({
          code: 'custom',
          path: ['startAt'],
          message: '읽는 중인 경우 시작일은 필수입니다.',
        });
      }
      if (finishedAt != null) {
        ctx.addIssue({
          code: 'custom',
          path: ['finishedAt'],
          message: '읽는 중인 경우 종료일은 입력할 수 없습니다.',
        });
      }
      break;
    case ReadingStatus.Finished:
      if (startAt == null || finishedAt == null) {
        ctx.addIssue({
          code: 'custom',
          path: ['startAt', 'finishedAt'],
          message: '읽은 책은 시작일과 종료일을 모두 입력해야 합니다.',
        });
      }
      break;
  }
}
