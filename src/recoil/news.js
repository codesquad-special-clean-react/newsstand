import { atom, selector, selectorFamily } from 'recoil';

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

export const mySubscribeNewsCompanyListSelector = selector({
  key: 'mySubscribeNewsCompanyListSelector',
  get: ({ get }) => {
    const newsList = get(newsFetchSelector;
    const subscribeList = get(myNewsSubscribeState;
    return newsList.filter(({ id }) => subscribeList.includes(id);
  },
};

export const myTargetNewsState = atom({
  key: 'myTargetNews',
  default: '',
})

export const myTargetNewsSelector = selector({
  key: 'myTargetNewsSelector',
  default: [],
  get: ({ get }) => {
    const subscribeList = get(mySubscribeNewsCompanyListSelector)
    const targetId = get(myTargetNewsState) ? get(myTargetNewsState) : subscribeList[0]?.id

    return subscribeList.filter(({ id }) => id === targetId)
  },
})

export const moveBtn = selectorFamily({
  key: 'moveSelector',
  set: (type) => ({ get, set }) => {
    const targetId = get(myTargetNewsState)
  },
})
