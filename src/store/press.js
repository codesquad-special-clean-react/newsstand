import { atom } from 'recoil';

const pressState = atom({
  key: 'pressState',
  default: [],
});

export { pressState };
