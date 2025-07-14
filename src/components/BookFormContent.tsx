import styled from '@emotion/styled';

import { READING_TOTAL_STEPS } from '@/constants';
import { useBook } from '@/hooks';
import { BookSummary, Button, Stepper } from '@/components';

export interface BookFormContentProps {
  id: number;
  step: number;
  goToStep: (step: number) => void;
}

export function BookFormContent({
  id,
  step,
  goToStep,
}: BookFormContentProps) {
  const { book } = useBook(id);
  return (
    <Wrapper>
      <BookSummary book={book} />
      <Stepper currentStep={step} totalSteps={READING_TOTAL_STEPS} />
      <Form>
        폼 영역
      </Form>
      <StepNavigation>
        <Button onClick={() => goToStep(step - 1)} disabled={step === 1}>
          이전
        </Button>
        <Button onClick={() => goToStep(step + 1)} disabled={step === READING_TOTAL_STEPS}>
          { step === READING_TOTAL_STEPS ? '제출' : '다음' }
        </Button>
      </StepNavigation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const StepNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #eee;
  width: 100%;
`;
