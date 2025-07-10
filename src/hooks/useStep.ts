import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export interface UseStepProps {
  pathname: string;
  totalSteps: number;
}

export type UseStepResult = {
  isReady: false;
  step: null;
  goToStep: () => void;
} | {
  isReady: true;
  step: number;
  goToStep: (newStep: number) => void;
}

export function useStep({ pathname, totalSteps }: UseStepProps): UseStepResult {
  const router = useRouter();
  const [step, setStep] = useState<number | null>(null);

  useEffect(() => {
    if (!router.isReady) return;

    const stepParam = router.query.step as string | undefined;
    const stepFromQuery = Number.parseInt(stepParam ?? '');

    const isValid =
      !Number.isNaN(stepFromQuery) &&
      stepFromQuery >= 1 &&
      stepFromQuery <= totalSteps;

    if (!isValid) {
      router.replace(
        {
          pathname,
          query: { step: 1 },
        },
        undefined,
        { shallow: true },
      )
      return;
    }

    setStep(stepFromQuery);
  }, [pathname, router, totalSteps]);

  const goToStep = (newStep: number) => {
    if (newStep < 1 || newStep > totalSteps) return;

    router.push(
      {
        pathname,
        query: { step: newStep },
      },
      undefined,
      { shallow: true }
    );
  };

  if (step == null) {
    return {
      isReady: false,
      step: null,
      goToStep: () => {
        /* noop */
      },
    };
  }

  return {
    step,
    isReady: true,
    goToStep,
  };
}
