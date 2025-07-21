import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <StyledButton type="button" {...rest}>
      { children }
    </StyledButton>
  );
}

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #333;
  }

  &:disabled {
    background-color: #aaa;
    border: 1px solid #aaa;
    cursor: not-allowed;
  }
`;
