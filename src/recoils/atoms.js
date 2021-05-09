const { atom } = require("recoil");
export const newsListState = atom({
  key: "newsListState",
  default: [],
});

export const currentNewsState = atom({
  key: "currentNewsState",
  default: null,
});
