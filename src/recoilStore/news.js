import { atom, selector } from 'recoil';
import { newsFetcher } from '@utils/api';
import { CAROUSEL_WIDTH, MODE } from '@utils/constant';
import { getPagingIndex } from '@utils/paging';

export const pathState = atom({
  key: 'pathState',
  default: '/newscompany',
});

export const CompanyListPageState = atom({
  key: 'CompanyListPageState',
  default: 0,
});

export const CompanyListPageMovingState = atom({
  key: 'CompanyListPageMovingState',
  default: false,
});

export const CompanyListPageSelector = selector({
  key: 'CompanyListPageSelector',
  get: ({ get }) => get(CompanyListPageState),
  set: ({ set }, page) => {
    set(CompanyListPageState, page);
    set(CompanyListPageMovingState, false);
  },
});

export const newsFetchState = atom({
  key: 'newsFetchState',
  default: newsFetcher.get() || [],
});

export const newsFetchSelector = selector({
  key: 'newsSelector',
  get: async ({ get }) => {
    const newsList = await get(newsFetchState);
    if (newsList.length) {
      const { start, end } = getPagingIndex(get(CompanyListPageState));
      return newsList.slice(start, end);
    }

    return [];
  },
});

export const mySubscribeNewsCompanyList = atom({
  key: 'mySubscribeNewsCompanyList',
  default: [],
});

export const mySubscribeNewsCompanyListSelector = selector({
  key: 'mySubscribeNewsCompanyListSelector',
  get: ({ get }) => {
    const newsList = get(newsFetchState);
    const subscribeList = get(mySubscribeNewsCompanyList);
    return subscribeList.map((id) => {
      return newsList.filter(({ id: companyId }) => companyId === id)[0];
    });
  },
});

export const currentNewsState = atom({
  key: 'currentNewsState',
  default: '',
});

export const currentNewsSelector = selector({
  key: 'currentNewsSelector',
  get: ({ get }) => get(currentNewsState),
  set: ({ get, set }, newTargetId = undefined) => {
    const companyList = get(mySubscribeNewsCompanyListSelector);
    let targetIdx = 0;
    if (newTargetId) {
      companyList.forEach(({ id }, idx) => id === newTargetId && (targetIdx = idx));
    }
    set(carouselXSelector, -targetIdx * CAROUSEL_WIDTH);
    set(currentNewsState, newTargetId);
  },
});

export const viewModeState = atom({
  key: 'viewModeState',
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

export const transitionState = atom({
  key: 'transitionState',
  default: 'all .5s',
});

export const transitionSelector = selector({
  key: 'transitionSelector',
  get: ({ get }) => get(transitionState),
});

export const carouselXSelector = selector({
  key: 'carouselXSelector',
  get: ({ get }) => get(carouselXState),
  set: ({ set }, newPositionWidth) => {
    set(carouselXState, newPositionWidth);
    set(carouselMoveState, true);
  },
});
