import { atom, selector } from 'recoil';

import { MENU, VIEW_MODE } from '@utils/constant';
import { getNews } from '@api/news';

export const menuState = atom({
  key: 'menuState',
  default: MENU.ALL_NEWS,
});

export const viewModeState = atom({
  key: 'viewModeState',
  default: VIEW_MODE.BLOCK,
});

// ??
export const myNewsState = atom({
  key: 'myNewsState',
  default: ['032', '056', '293', '011', '904'],
  // default: [],
});

export const newsState = selector({
  key: 'newsState',
  get: async ({ get }) => {
    try {
      const newsList = await getNews();
      const myNews = get(myNewsState);

      const subscribeNews = (news) => {
        return myNews.includes(news.id)
          ? { ...news, subscribe: true }
          : { ...news, subscribe: false };
      };

      return newsList.map(subscribeNews);
    } catch (error) {
      console.error(`NEWS LIST GET ERROR: ${error}`);
    }
  },
});

export const myNewsListState = selector({
  key: 'myNewsListState',
  get: async ({ get }) => {
    try {
      const newsList = await getNews();
      const myNews = get(myNewsState);

      return newsList.filter((news) => myNews.includes(news.id));
    } catch (error) {
      console.error(`My News GET ERROR: ${error}`);
    }
  },
});
