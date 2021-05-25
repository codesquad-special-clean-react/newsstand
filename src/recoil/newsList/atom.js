import {atom} from 'recoil';

const newsListAtom = atom({
  key: 'newsListAtom',
  default: [],
});

export default newsListAtom;
