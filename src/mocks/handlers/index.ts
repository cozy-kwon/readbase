import { bookHandlers } from './books';
import { readingHandlers } from './readings';

export const handlers = [
  ...bookHandlers,
  ...readingHandlers,
];
