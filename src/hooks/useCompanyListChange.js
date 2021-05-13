import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CompanyListPageMovingState, CompanyListPageSelector, newsFetchState } from '@recoilStore/news';
import { HEADER_BTN } from '@utils/constant';

export const useCompanyListChange = () => {
  const setMoving = useSetRecoilState(CompanyListPageMovingState);
  const [page, setPage] = useRecoilState(CompanyListPageSelector);
  const newsListLen = useRecoilValue(newsFetchState).length;
  const lastPageIdx = Math.floor(newsListLen / 15);

  const changeCompanyList = (action = HEADER_BTN.NEXT.title) => {
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
    changeCompanyList,
  };
};
