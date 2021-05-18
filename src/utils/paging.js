import { COUNT_PER_PAGE } from './constant';

export const getPagingIndex = (page) => {
  const start = page * COUNT_PER_PAGE;
  const end = (page + 1) * COUNT_PER_PAGE;

  return { start, end };
};
