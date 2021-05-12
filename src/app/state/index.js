import { atom, selector } from 'recoil';

export const currentPressState = atom({
  key: 'currentPress',
  default: 'SBS',
});

const newsDataQuery = selector({
  key: 'newsData',
  get: async () => {
    return await fetch('/news').then((res) => res.json());
  },
});

export const pressListQuery = selector({
  key: 'pressList',
  get: ({ get }) => {
    const newsList = get(newsDataQuery);

    return newsList.map((press) => ({
      id: press.id,
      name: press.company,
    }));
  },
});

export const newsListQuery = selector({
  key: 'newsList',
  get: ({ get }) => {
    const press = get(currentPressState);

    const newsList = get(newsDataQuery);
    return newsList.find((news) => news.company === press);
  },
});
