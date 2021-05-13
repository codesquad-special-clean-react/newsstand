import React from 'react';
import { Link, routes } from '@utils/Router';
import { DirectionBtnWrap, HeaderWrap, NewsStandSortBtnWrap, RightControlBtnWrap } from './Header.style';
import { HEADER_BTN } from '@utils/constant';
import { useCompanyListChange, useCurrentNewsChange, usePath, useTimer } from '@hooks';
import ViewModeBtn from './ViewModeBtn';

const Header = () => {
  const { path } = usePath();
  const { changeCurrentNews } = useCurrentNewsChange();
  const { changeCompanyList } = useCompanyListChange();
  useTimer({ path, changeCurrentNews });

  const handleClickArrow = ({ target: { name } }) => {
    if (path === routes.mynews.path) return changeCurrentNews(name);

    if (path === routes.newscompany.path) return changeCompanyList(name);
  };

  return (
    <HeaderWrap>
      <NewsStandSortBtnWrap>
        <Link to={routes.mynews.path}>{HEADER_BTN.SUBSCRIPTION_COMPANY}</Link>
        <Link to={routes.newscompany.path}>{HEADER_BTN.ALL_COMPANY}</Link>
      </NewsStandSortBtnWrap>
      <RightControlBtnWrap>
        <ViewModeBtn path={path} />
        <DirectionBtnWrap>
          <button name={HEADER_BTN.PREV.title} data-direction="1" onClick={handleClickArrow}>
            {HEADER_BTN.PREV.symbol}
          </button>
          <button name={HEADER_BTN.NEXT.title} data-direction="-1" onClick={handleClickArrow}>
            {HEADER_BTN.NEXT.symbol}
          </button>
        </DirectionBtnWrap>
      </RightControlBtnWrap>
    </HeaderWrap>
  );
};
export default React.memo(Header);
