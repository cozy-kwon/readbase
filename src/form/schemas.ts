import { z } from 'zod';

import { ReadingStatus } from '@/models';
import { step1Validation, StepKey } from '@/form';

export const ReadingSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  totalPages: z.number(),
  publishedAt: z.date(),
  status: z.enum(Object.values(ReadingStatus)),
  startAt: z.coerce.date().optional(),
  finishedAt: z.coerce.date().optional(),
  isRecommended: z.boolean(),
  rating: z.number().min(0).max(5),
  review: z.string().optional(),
  quotePageNumbers: z.array(z.number().int().positive().min(1)).optional(),
  isPublic: z.boolean(),
}).superRefine((value, ctx) => {
  step1Validation(value, ctx);
});

export type ReadingForm = z.infer<typeof ReadingSchema>;

export const readingFormDefaultValues: Partial<ReadingForm> = {
  status: ReadingStatus.WantToRead,
  startAt: undefined,
  finishedAt: undefined,
  isRecommended: false,
  rating: 0,
  review: '',
  quotePageNumbers: [],
  isPublic: false,
};

export const Step1Schema = ReadingSchema.pick({
  status: true,
  startAt: true,
  finishedAt: true,
});

export const Step2Schema = ReadingSchema.pick({
  isRecommended: true,
  rating: true,
});

export const Step3Schema = ReadingSchema.pick({
  review: true,
});

export const Step4Schema = ReadingSchema.pick({
  quotePageNumbers: true,
});

export const Step5Schema = ReadingSchema.pick({
  isPublic: true,
});

function getStepFields<T extends { shape: object }>(schema: T) {
  return Object.keys(schema.shape) as (keyof typeof schema.shape)[];
}

export const STEP1_FIELDS = getStepFields(Step1Schema);
export const STEP2_FIELDS = getStepFields(Step2Schema);
export const STEP3_FIELDS = getStepFields(Step3Schema);
export const STEP4_FIELDS = getStepFields(Step4Schema);
export const STEP5_FIELDS = getStepFields(Step5Schema);

/** 각 스텝의 필드 목록 */
export const STEP_FIELDS: Record<StepKey, string[]> = {
  1: STEP1_FIELDS,
  2: STEP2_FIELDS,
  3: STEP3_FIELDS,
  4: STEP4_FIELDS,
  5: STEP5_FIELDS,
};
