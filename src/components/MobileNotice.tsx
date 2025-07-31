import styled from '@emotion/styled';

export function MobileNotice() {
  return (
    <Container>
      <Content>
        <Icon>💻</Icon>
        <Title>데스크톱에서 접속해주세요</Title>
        <Message>
          Readbase는 데스크톱 환경에서 최적화되어 있습니다.
          <br />
          화면 너비 1,024px 이상에서 이용해주세요.
        </Message>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: none;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;

  @media (max-width: 1023px) {
    display: flex;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 400px;
`;

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #333;
`;

const Message = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0;
`;
