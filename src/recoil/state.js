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

export const newsState = selector({
  key: 'newsState',
  get: async () => {
    try {
      const newList = await getNews();
      return newList;
    } catch (error) {
      console.error(`NEWS LIST GET ERROR: ${error}`);
    }
  },
});
