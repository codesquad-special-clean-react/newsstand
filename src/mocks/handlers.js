import { rest } from 'msw';
import data from '../naver_news_json.json';

export const handlers = [
  rest.get('/news', (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];
