import { atom } from 'recoil';

import { MENU, VIEW_MODE } from '@utils/constant';

export const menuState = atom({
  key: 'menuState',
  default: MENU.ALL_NEWS,
});

export const viewModeState = atom({
  key: 'viewModeState',
  default: VIEW_MODE.BLOCK,
});
