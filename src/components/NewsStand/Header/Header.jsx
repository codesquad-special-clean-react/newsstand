import React from 'react';
import { Link, routes } from '@utils/Router';
import { myNewsModeState } from '@recoilStore/news';
import { useSetRecoilState } from 'recoil';
import { DirectionBtnWrap, HeaderWrap, MyNewsBtnWrap, NewsStandSortBtnWrap, RightControlBtnWrap } from './Header.style';
import { HEADER_BTN, MODE } from '@utils/constant';
import { useNewsMove, usePath, useTimer } from '@hooks';

const Header = () => {
  const { path } = usePath();
  const { moveNewsCompany } = useNewsMove();
  const setNewsMode = useSetRecoilState(myNewsModeState);

  useTimer({ path, moveNewsCompany });

  const handleClickArrow = ({ target: { name } }) => moveNewsCompany(name);

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
