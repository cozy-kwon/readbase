import styled from '@emotion/styled';

export interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <Wrapper>
      { Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isActive = step === currentStep;
        return (
          <Step key={step}>
            <Circle active={isActive}>{ step }</Circle>
            { step < totalSteps && <Line /> }
          </Step>
        );
      }) }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div<{ active: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#000' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#999')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Line = styled.div`
  width: 32px;
  height: 2px;
  background-color: #ddd;
`;
