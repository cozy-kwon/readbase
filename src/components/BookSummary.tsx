import { format } from 'date-fns';
import styled from '@emotion/styled';

import { Book } from '@/models';

interface BookSummaryProps {
  book: Book;
}

export function BookSummary({ book }: BookSummaryProps) {
  return (
    <Container>
      <Title>{ book.title }</Title>
      <Meta>
        <Author>{ book.author }</Author>
        <Divider />
        <Pages>총 { book.totalPages } 페이지</Pages>
        <Divider />
        <PublishedAt>출판일 : { format(book.publishedAt, 'yyyy-MM-dd') }</PublishedAt>
      </Meta>
    </Container>
  );
}

const Container = styled.section`
  padding: 16px 20px;
  margin-bottom: 24px;
  background-color: #f9f9f9;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 8px 0;
  color: #222;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
`;

const Author = styled.span``;

const Pages = styled.span``;

const PublishedAt = styled.span``;

const Divider = styled.span`
  display: inline-block;
  margin: 0 8px;
  width: 1px;
  height: 14px;
  background-color: #ccc;
`;
