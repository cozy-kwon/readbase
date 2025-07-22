import styled from '@emotion/styled';

import { Button } from '@/components';

export interface StepNavigationProps {
  step: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
}

export function StepNavigation({
  step,
  totalSteps,
  onPrev,
  onNext,
  isNextDisabled,
}: StepNavigationProps) {
  return (
    <Wrapper>
      <Button onClick={onPrev} disabled={step === 1}>
        이전
      </Button>
      { step === totalSteps ? (
        <Button type="submit">
          제출
        </Button>
      ) : (
        <Button type="button" onClick={onNext} disabled={isNextDisabled}>
          다음
        </Button>
      ) }
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
gap: 12px;
margin-top: 48px;
padding-top: 24px;
border-top: 1px solid #eee;
width: 100%;
`;
