export enum ReadingStatus {
  /** 읽고 싶은 책 */
  WantToRead = 'WANT_TO_READ',
  /** 읽는 중 */
  Reading = 'READING',
  /** 읽음 */
  Finished = 'FINISHED',
  /** 보류 중 */
  Hold = 'HOLD',
}

export interface Book {
  /** ID */
  id: number;
  /** 제목 */
  title: string;
  /** 저자 */
  author: string;
  /** 총 페이지수 */
  totalPages: number;
}

export interface Reading extends Book {
  /** 독서 상태 */
  status: ReadingStatus;
  /** 추천 여부 */
  isRecommended: boolean;
  /** 별점 */
  rating: number;
  /** 독후감 */
  review: string;
  /** 인용구 페이지 번호 목록 */
  quotePageNumbers: number[];
  /** 공개 여부 */
  isPublic: boolean;
  /** 독서 시작일 */
  startedAt: Date;
  /** 독서 완료일 */
  finishedAt: Date;
}
