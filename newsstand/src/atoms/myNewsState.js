import { atom, selector, waitForAll } from "recoil";
import { getMyNewsData } from "../api/api";
import newsState from "./newsState";

export const myNewsListIndex = atom({
  key: "myNewsListIndex",
  default: 0,
});

export const subscribeState = atom({
  key: "subscribeState",
  default: "All",
});

export const mySubscribeList = selector({
  key: "mySubscribeList",
  get: async () => {
    const mySubscribeData = await getMyNewsData();
    return mySubscribeData;
  },
});

export const mySubscribeNews = selector({
  key: "mySuscribeNews",
  get: ({ get }) => {
    const subscribe = get(subscribeState);
    const { mySubscribeData, news } = get(
      waitForAll({
        mySubscribeData: mySubscribeList,
        news: newsState,
      })
    );
    const myNewsId = mySubscribeData.map((news) => news.pressId);
    const newsList = news.map((newsItem) =>
      myNewsId.includes(newsItem.id)
        ? { ...newsItem, subscribe: true }
        : { ...newsItem, subscribe: false }
    );

    switch (subscribe) {
      case "Subscribed":
        return newsList.filter((item) => item.subscribe);
      default:
        return newsList;
    }
  },
});

export const selectedPressNews = selector({
  key: "selectedPressNews",
  get: ({ get }) => {
    const newsIndex = get(myNewsListIndex);
    const news = get(mySubscribeNews);
    return news[newsIndex];
  },
});
