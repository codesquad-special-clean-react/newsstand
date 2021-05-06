import { selector } from "recoil";
import APIs from "../apis/APIs.js";

const pressState = selector({
  key: "pressState",
  get: async () => await APIs.getPress(),
});

export { pressState };
