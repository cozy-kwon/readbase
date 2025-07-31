import { forwardRef, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface NumberInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

function NumberInputFieldImpl(
  { label, hint, error, ...props }: NumberInputFieldProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <Wrapper>
      { label && <Label>{ label }</Label> }
      <NumberInput ref={ref} type="number" {...props} hasError={!!error} />
      <Hint isError={!!error}>{ error || hint }</Hint>
    </Wrapper>
  );
}

export const NumberInputField = forwardRef(NumberInputFieldImpl);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 360px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Hint = styled.span<{ isError: boolean }>`
  font-size: 12px;
  color: ${({ isError }) => (isError ? '#f44' : '#888')};
`;

const NumberInput = styled.input<{ hasError?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? '#f44' : '#ccc')};
  border-radius: 4px;
  font-size: 14px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    appearance: textfield;
  }
`;
