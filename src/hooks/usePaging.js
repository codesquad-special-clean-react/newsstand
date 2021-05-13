import { useRecoilState, useRecoilValue } from 'recoil';
import { movingState, newsFetchState, newsPageSelector } from '@recoilStore/news';
import { HEADER_BTN } from '@utils/constant';

export const usePaging = () => {
  const [moving, setMoving] = useRecoilState(movingState);
  const [page, setPage] = useRecoilState(newsPageSelector);
  const newsListLen = useRecoilValue(newsFetchState) ? useRecoilValue(newsFetchState).length : 0;
  const lastPageIdx = Math.floor(newsListLen / 15);

  const movePaging = (action = HEADER_BTN.NEXT.title) => {
    if (moving) return;
    setMoving(true);
    if (action === 'prev') {
      if (page === 0) {
        return setPage(lastPageIdx);
      }
      setPage((prevPage) => prevPage - 1);
    }
    if (action === 'next') {
      if (page === lastPageIdx) {
        return setPage(0);
      }
      setPage((prevPage) => prevPage + 1);
    }
  };
  return {
    movePaging,
  };
};
