import { atom, selector } from 'recoil';
import { newsFetcher } from '@utils/api';
import { MODE } from '@utils/constant';
import { getPagingIndex } from '../utils/paging';

export const pathState = atom({
  key: 'pathState',
  default: '/newscompany',
});

export const movingState = atom({
  key: 'movingState',
  default: false,
});

export const newsPageState = atom({
  key: 'newsPageState',
  default: 0,
});

export const newsPageSelector = selector({
  key: 'newsPageSelector',
  get: ({ get }) => get(newsPageState),
  set: ({ set }, newValue) => {
    set(newsPageState, newValue);
    set(movingState, false);
  },
});
export const newsFetchState = atom({
  key: 'newsFetchState',
  default: newsFetcher.get(),
});

export const newsFetchSelector = selector({
  key: 'newsSelector',
  get: async ({ get }) => {
    const newsList = get(newsFetchState);
    const { start, end } = getPagingIndex(get(newsPageState));
    return newsList.slice(start, end);
  },
});

export const myNewsSubscribeState = atom({
  key: 'myNewsSubscribeState',
  default: [],
});

export const mySubscribeNewsCompanyListSelector = selector({
  key: 'mySubscribeNewsCompanyListSelector',
  get: ({ get }) => {
    const newsList = get(newsFetchSelector);
    const subscribeList = get(myNewsSubscribeState);
    return subscribeList.map((id) => {
      return newsList.filter(({ id: companyId }) => companyId === id)[0];
    });
  },
});

export const myTargetNewsState = atom({
  key: 'myTargetNews',
  default: '',
});

export const myTargetNewsSelector = selector({
  key: 'myTargetNewsSelector',
  default: [],
  get: ({ get }) => {
    const subscribeList = get(mySubscribeNewsCompanyListSelector);
    const targetId = get(myTargetNewsState) ? get(myTargetNewsState) : subscribeList[0]?.id;

    return subscribeList.filter(({ id }) => id === targetId);
  },
});

export const myNewsModeState = atom({
  key: 'myNewsModeState',
  default: MODE.LIST,
});

export const timerIdState = atom({
  key: 'timerIdState',
  default: '',
});
