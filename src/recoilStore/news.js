import { atom, selector, useSetRecoilState } from 'recoil';
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
    if (newsList) {
      return newsList.slice(start, end);
    }

    return [];
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
  get: ({ get }) => get(myTargetNewsState),
  set: ({ get, set }, newValue) => {
    const companyList = get(mySubscribeNewsCompanyListSelector);
    let targetIdx = 0;
    companyList.forEach(({ id }, idx) => {
      if (id === newValue) {
        targetIdx = idx;
      }
    });
    set(carouselXSelector, -targetIdx * 1050);
    set(myTargetNewsState, newValue);
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
export const carouselXState = atom({
  key: 'carouselXState',
  default: 0,
});

export const carouselMoveState = atom({
  key: 'carouselMoveState',
  default: false,
});

export const carouselXSelector = selector({
  key: 'carouselXSelector',
  get: ({ get }) => get(carouselXState),
  set: ({ set }, newValue) => {
    set(carouselXState, newValue);
    set(carouselMoveState, true);
  },
});
