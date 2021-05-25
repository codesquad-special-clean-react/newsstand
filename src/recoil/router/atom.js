import {atom} from 'recoil';

const routerAtom = atom({
  key: 'routerAtom',
  default: {
    path: '/',
    hash: '',
    query: '',
  },
});

export default routerAtom;
