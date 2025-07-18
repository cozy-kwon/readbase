import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export interface UseStepProps {
  pathname: string;
  totalSteps: number;
}

export interface UseStepResult {
  step: number | null;
  goToStep: (newStep: number) => void;
}

export function useStep({ pathname, totalSteps }: UseStepProps): UseStepResult {
  const router = useRouter();
  const [step, setStep] = useState<number | null>(null);

  useEffect(() => {
    if (!router.isReady) return;

    const stepParam = router.query.step;
    const parsedStep = Number(stepParam ?? '');

    const isValid =
      !Number.isNaN(parsedStep) &&
      parsedStep >= 1 &&
      parsedStep <= totalSteps;

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

    setStep(parsedStep);
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

  return {
    step,
    goToStep,
  };
}
