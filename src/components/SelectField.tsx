import { forwardRef, SelectHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
}

function SelectFieldImpl(
  { label, hint, error, children, ...props }: SelectFieldProps,
  ref: React.Ref<HTMLSelectElement>
) {
  return (
    <Wrapper>
      { label && <Label>{ label }</Label> }
      <Select ref={ref} {...props} hasError={error != null}>
        { children }
      </Select>
      <Hint isError={error != null}>{ error || hint }</Hint>
    </Wrapper>
  );
}

export const SelectField = forwardRef(SelectFieldImpl);

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

const Select = styled.select<{ hasError?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? '#f44' : '#ccc')};
  border-radius: 4px;
  font-size: 14px;
`;

