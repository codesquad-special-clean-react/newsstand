import React from 'react';
import { Link, routes } from '@utils/Router';
import { movingState, myNewsModeState, newsFetchState, newsPageSelector } from '@recoilStore/news';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { DirectionBtnWrap, HeaderWrap, MyNewsBtnWrap, NewsStandSortBtnWrap, RightControlBtnWrap } from './Header.style';
import { HEADER_BTN, MODE } from '@utils/constant';
import { useNewsMove, usePath, useTimer } from '@hooks';

const Header = () => {
  const { path } = usePath();
  const { moveNewsCompany } = useNewsMove();
  const setNewsMode = useSetRecoilState(myNewsModeState);
  const [moving, setMoving] = useRecoilState(movingState);
  const [page, setPage] = useRecoilState(newsPageSelector);
  const lastPageIdx = Math.floor(useRecoilValue(newsFetchState).length / 15);
  useTimer({ path, moveNewsCompany });
  const handleClickArrow = ({ target: { name } }) => {
    if (path === routes.mynews.path) return moveNewsCompany(name);
    if (path === routes.newscompany.path) {
      if (moving) return;
      setMoving(true);
      if (name === 'prev') {
        if (page === 0) {
          return setPage(lastPageIdx);
        }
        setPage((prevPage) => prevPage - 1);
      }
      if (name === 'next') {
        if (page === lastPageIdx) {
          return setPage(0);
        }
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  const changeViewMode = ({ target: { name } }) => setNewsMode(name);

  const MyNewsBtnList = () => {
    if (path === routes.mynews.path) {
      return (
        <MyNewsBtnWrap>
          <button name={MODE.LIST} onClick={changeViewMode}>
            {MODE.LIST}
          </button>
          <button name={MODE.CARD} onClick={changeViewMode}>
            {MODE.CARD}
          </button>
        </MyNewsBtnWrap>
      );
    }
    return null;
  };

  return (
    <HeaderWrap>
      <NewsStandSortBtnWrap>
        <Link to={routes.mynews.path}>{HEADER_BTN.SUBSCRIPTION_COMPANY}</Link>
        <Link to={routes.newscompany.path}>{HEADER_BTN.ALL_COMPANY}</Link>
      </NewsStandSortBtnWrap>
      <RightControlBtnWrap>
        <MyNewsBtnList />
        <DirectionBtnWrap>
          <button name={HEADER_BTN.PREV.title} onClick={handleClickArrow}>
            {HEADER_BTN.PREV.symbol}
          </button>
          <button name={HEADER_BTN.NEXT.title} onClick={handleClickArrow}>
            {HEADER_BTN.NEXT.symbol}
          </button>
        </DirectionBtnWrap>
      </RightControlBtnWrap>
    </HeaderWrap>
  );
};

export default Header;
