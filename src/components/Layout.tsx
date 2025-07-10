import { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header>Readbase Header</Header>
      <Content>
        { children }
      </Content>
      <Footer>Readbase Footer</Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
  color: #000;
`;

const Header = styled.header`
  height: 64px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.main`
  width: 100%;
  flex: 1;
  padding: 32px 24px;
  margin: 0 auto;
`;

const Footer = styled.footer`
  height: 48px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
