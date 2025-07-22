import { Step1, Step2, Step3, Step4, Step5 } from '@/form/components';

export const STEP_COMPONENTS = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
  5: Step5,
} as const;
export type StepKey = keyof typeof STEP_COMPONENTS;
