import { atom, selector } from 'recoil';

export const pathState = atom({
  key: 'pathState',
  default: '/newscompany',
});

export const newsSelector = selector({
  key: 'newsSelector',
  get: async ({}) => {
    const response = await fetch('http://localhost:3001/news');
    if (response.error) {
      throw response.error;
    }
    return response.json();
  },
});

export const myNewsStandState = atom({
  key: 'myNewsStandState',
  default: [],
});
