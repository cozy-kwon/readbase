import z from 'zod';

import { ReadingForm } from '@/form';

export function step4Validation(value: ReadingForm, ctx: z.RefinementCtx) {
  const { totalPages, quotePageNumbers } = value;

  if (quotePageNumbers && quotePageNumbers.length > 0) {
    // 인용구가 두개 이상일 때만 모든 페이지 번호가 required
    const isRequired = quotePageNumbers.length >= 2;

    for (let i = 0; i < quotePageNumbers.length; i++) {
      const pageNumber = quotePageNumbers[i]?.pageNumber;

      // required 조건 체크
      if (isRequired && (pageNumber == null || pageNumber === 0)) {
        ctx.addIssue({
          code: 'custom',
          path: ['quotePageNumbers', i, 'pageNumber'],
          message: '인용구가 두개 이상일 때는 모든 페이지 번호가 필수입니다.',
        });
        continue;
      }

      // 페이지 번호가 입력된 경우에만 유효성 검사
      if (pageNumber != null && pageNumber !== 0) {
        // 숫자만 입력된지 체크
        if (Number.isInteger(pageNumber) === false) {
          ctx.addIssue({
            code: 'custom',
            path: ['quotePageNumbers', i, 'pageNumber'],
            message: '페이지 번호는 숫자만 입력 가능합니다.',
          });
          continue;
        }

        // 1 이상인지 체크
        if (pageNumber < 1) {
          ctx.addIssue({
            code: 'custom',
            path: ['quotePageNumbers', i, 'pageNumber'],
            message: '페이지 번호는 1 이상이어야 합니다.',
          });
          continue;
        }

        // totalPages 이하인지 체크
        if (pageNumber > totalPages) {
          ctx.addIssue({
            code: 'custom',
            path: ['quotePageNumbers', i, 'pageNumber'],
            message: `페이지 번호는 도서 전체 페이지 수(${totalPages}페이지)보다 클 수 없습니다.`,
          });
          continue;
        }
      }
    }
  }
}
