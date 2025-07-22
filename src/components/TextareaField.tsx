import { forwardRef, TextareaHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

function TextareaFieldImpl(
  { label, hint, error, ...props }: TextareaFieldProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  return (
    <Wrapper>
      { label && <Label>{ label }</Label> }
      <Textarea ref={ref} {...props} hasError={!!error} />
      <Hint isError={!!error}>{ error || hint }</Hint>
    </Wrapper>
  );
}

export const TextareaField = forwardRef(TextareaFieldImpl);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Hint = styled.span<{ isError: boolean }>`
  font-size: 12px;
  color: ${({ isError }) => (isError ? '#f44' : '#888')};
`;

const Textarea = styled.textarea<{ hasError?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? '#f44' : '#ccc')};
  border-radius: 4px;
  font-size: 14px;
  min-height: 120px;
  resize: vertical;
`;
