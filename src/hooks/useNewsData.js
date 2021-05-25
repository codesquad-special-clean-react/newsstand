import {useState, useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import newsListAtom from '../recoil/newsList';
import subscribedIdsAtom, {withNewsData} from '../recoil/subscribe';

const useNewsData = (pageSize = 5) => {
  const newsList = useRecoilValue(newsListAtom);
  const subscribedNewsList = useRecoilValue(withNewsData);
  const subscribedNewsIds = useRecoilValue(subscribedIdsAtom);

  const [page, setPage] = useState(0);
  const [maximumPage, setMaximumPage] = useState(0);
  const [selectedPressIdx, selectPressIdx] = useState(0);

  const getItemsForPage = (items) => {
    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setMaximumPage(Math.ceil(newsList.length / pageSize) - 1);
  }, [newsList, pageSize]);

  useEffect(() => {
    if (subscribedNewsList.length === 0 ) return;
    selectPressIdx(subscribedNewsList[0].id);
  }, [subscribedNewsList]);

  const pageUp = setPage.bind(null, page === maximumPage ? page : page + 1);
  const pageDown = setPage.bind(null, page === 0 ? 0 : page - 1);

  const isSubscribed = (pressId) => {
    return subscribedNewsIds.includes(pressId);
  };

  return {newsList, pageUp, pageDown, selectedPressIdx, selectPressIdx, isSubscribed, subscribedNewsList};
};

export default useNewsData;
