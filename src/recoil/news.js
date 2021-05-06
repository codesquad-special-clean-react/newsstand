import { atom, selector } from 'recoil';

export const pathState = atom({
  key: 'pathState',
  default: '/newscompany',
});

export const newsFetchSelector = selector({
  key: 'newsSelector',
  get: async ({}) => {
    try {
      const response = await fetch('http://localhost:3001/news');
      if (response.error) {
        throw response.error;
      }
      return response.json();
    } catch (err) {
      console.error(err);
    }
  },
});

export const myNewsSubscribeState = atom({
  key: 'myNewsSubscribeState',
  default: [],
});

export const mySubscribeNewCompanyListSelector = selector({
  key: 'mySubscribeNewCompanyListSelector',
  get: ({ get }) => {
    const newsList = get(newsFetchSelector);
    const subscribeList = get(myNewsSubscribeState);
    return newsList.filter(({ id }) => subscribeList.includes(id));
  },
});

export const myTargetNewsState = atom({
  key: 'myTargetNews',
  default: '',
});

export const myTargetNewsSelector = selector({
  key: 'myTargetNewsSelector',
  get: ({ get }) => {
    const subscribeList = get(mySubscribeNewCompanyListSelector);
    const targetId = get(myTargetNewsState);
    return subscribeList.filter(({ id }) => id === targetId)[0];
  },
});
