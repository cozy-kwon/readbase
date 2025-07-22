import { FormProvider, Resolver, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';

import { READING_TOTAL_STEPS } from '@/constants';
import { useBook } from '@/hooks';
import { BookSummary, Stepper } from '@/components';
import {
  ReadingForm,
  readingFormDefaultValues,
  ReadingSchema,
  STEP_COMPONENTS,
  STEP_FIELDS,
  StepKey,
  StepNavigation,
} from '@/form';

export interface BookFormContentProps {
  id: number;
  step: StepKey;
  goToStep: (step: number) => void;
}

export function BookFormContent({
  id,
  step,
  goToStep,
}: BookFormContentProps) {
  const { book } = useBook(id);
  const form = useForm<ReadingForm>({
    resolver: zodResolver(ReadingSchema) as Resolver<ReadingForm>,
    defaultValues: {
      id: book.id,
      title: book.title,
      author: book.author,
      totalPages: book.totalPages,
      publishedAt: new Date(book.publishedAt),
      ...readingFormDefaultValues,
    },
    mode: 'onChange',
  });

  const handleNextStep = async () => {
    const currentStepFields = STEP_FIELDS[step];
    const isValid = await form.trigger(currentStepFields as (keyof ReadingForm)[]);
    if (isValid) {
      goToStep(step + 1);
    }
  };

  const handleSubmit = form.handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  });

  const CurrentStepComponent = STEP_COMPONENTS[step];

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <BookSummary book={book} />
          <Stepper currentStep={step} totalSteps={READING_TOTAL_STEPS} />
          { CurrentStepComponent && <CurrentStepComponent /> }
          <StepNavigation
            step={step}
            totalSteps={READING_TOTAL_STEPS}
            onPrev={() => goToStep(step - 1)}
            onNext={handleNextStep}
          />
        </Wrapper>
      </form>
    </FormProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
