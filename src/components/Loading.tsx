import styled from '@emotion/styled';

import { Layout } from '@/components/Layout';

export function Loading() {
  return (
    <Layout>
      <Warning>로딩중...</Warning>
    </Layout>
  );
}

const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
`;
