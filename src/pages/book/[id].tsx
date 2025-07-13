import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { Button, Layout, Stepper } from '@/components';
import { READING_TOTAL_STEPS } from '@/constants';
import { useStep } from '@/hooks';

export default function BookFormPage() {
  const router = useRouter();
  const idFromQuery = router.query.id as string;
  const { step, goToStep } = useStep({
    pathname: `/book/${idFromQuery}`,
    totalSteps: READING_TOTAL_STEPS,
  });

  if (step == null) {
    return null;
  }

  return (
    <Layout>
      <Wrapper>
        <Title>책 제목 영역</Title>
        <Stepper currentStep={step} totalSteps={READING_TOTAL_STEPS} />
        <Form>
          폼 영역
        </Form>
        <StepNavigation>
          <Button
            onClick={() => goToStep(step - 1)}
            disabled={step === 1}
          >
            이전
          </Button>
          <Button
            onClick={() => goToStep(step + 1)}
            disabled={step === READING_TOTAL_STEPS}
          >
            { step === READING_TOTAL_STEPS ? '제출' : '다음' }
          </Button>
        </StepNavigation>
      </Wrapper>
    </Layout>
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
