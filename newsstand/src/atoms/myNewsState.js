import { atom, selector, waitForAll } from "recoil";
import { getMyNewsData } from "../api/api";
import newsState from "./newsState";

export const mySubscribeState = selector({
  key: "mySubscribeState",
  get: async () => {
    const mySubscribeData = await getMyNewsData();
    return mySubscribeData;
  },
});

export const mySuscribeNews = selector({
  key: "mySuscribeNews",
  get: ({ get }) => {
    const { mySubscribeList, news } = get(
      waitForAll({
        mySubscribeList: mySubscribeState,
        news: newsState,
      })
    );
    const myNewsId = mySubscribeList.map((news) => news.pressId);
    return news.map((newsItem) =>
      myNewsId.includes(newsItem.id)
        ? { ...newsItem, subscribe: true }
        : { ...newsItem, subscribe: false }
    );
  },
});
