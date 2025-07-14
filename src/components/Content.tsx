import styled from '@emotion/styled';

import { READING_TOTAL_STEPS } from '@/constants';
import { Book } from '@/models';
import { Button, Stepper } from '@/components';

export function Content({
  step,
  book,
  isLoading,
  goToStep,
}: {
  step: number | null;
  book: Book | undefined;
  isLoading: boolean;
  goToStep: (step: number) => void;
}) {
  if (step == null || isLoading) {
    return <Warning>Loading...</Warning>;
  }

  if (!book) {
    return <Warning>책 정보를 불러올 수 없습니다.</Warning>;
  }

  return (
    <Wrapper>
      <Title>{ book.title }</Title>
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

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
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

const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
`;
