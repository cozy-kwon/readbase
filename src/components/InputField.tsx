import { forwardRef, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

function InputFieldImpl(
  { label, hint, error, value, ...props }: InputFieldProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <Wrapper>
      { label && <Label>{ label }</Label> }
      <Input ref={ref} {...props} hasError={!!error} value={value ?? ''} />
      <Hint isError={!!error}>{ error || hint }</Hint>
    </Wrapper>

  );
}

export const InputField = forwardRef(InputFieldImpl);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 240px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input<{ hasError?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? '#f44' : '#ccc')};
  border-radius: 4px;
  font-size: 14px;
`;

const Hint = styled.span<{ isError: boolean }>`
  font-size: 12px;
  color: ${({ isError }) => (isError ? '#f44' : '#888')};
`;
