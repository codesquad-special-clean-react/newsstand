import { atom, selector } from "recoil";
import { getNewsData } from "../api/api";

const newsState = selector({
  key: "newsState",
  get: async () => {
    const newsData = await getNewsData();
    return newsData;
  },
});

export default newsState;
