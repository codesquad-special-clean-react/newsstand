import {selector} from 'recoil';
import subscribedIdsAtom from '.';
import newsListAtom from '../newsList';

const withNewsData = selector({
  key: 'subscribedAtomWithNewsData',
  get: ({get}) => {
    const newsList = get(newsListAtom);
    const subscribedIds = get(subscribedIdsAtom);

    return subscribedIds.map((subscribedId) => {
      const [news] = newsList.filter(({id})=>id===subscribedId);
      return news;
    });
  },
});

export default withNewsData;
