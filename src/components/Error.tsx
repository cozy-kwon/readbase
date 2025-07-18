import styled from '@emotion/styled';

import { Layout } from '@/components/Layout';

export function Error() {
  return (
    <Layout>
      <Warning>책 정보를 불러올 수 없습니다.</Warning>
    </Layout>
  );
}

const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
`;
