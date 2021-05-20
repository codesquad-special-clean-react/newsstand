import {atom} from 'recoil';

const subscribedIdsAtom = atom({
  key: 'subscribedNewsIdAtom',
  default: [],
});

export default subscribedIdsAtom;
