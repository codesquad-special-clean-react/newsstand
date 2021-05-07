import React, { useContext, useEffect } from 'react';
import { HistoryContext, Link, routes } from '@utils/Router';
import { myNewsModeState, myNewsSubscribeState, myTargetNewsState, pathState, timerIdState } from '@recoil/news';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DirectionBtnWrap, HeaderWrap, MyNewsBtnWrap, NewsStandSortBtnWrap, RightControlBtnWrap } from './Header.style';
import { HEADER_BTN, MODE } from '@utils/constant';

const Header = () => {
  const { currentPath } = useContext(HistoryContext);
  const [path, setPath] = useRecoilState(pathState);
  const [targetId, setTargetId] = useRecoilState(myTargetNewsState);
  const subscribeList = useRecoilValue(myNewsSubscribeState);
  const [newsMode, setNewsMode] = useRecoilState(myNewsModeState);
  const [timerId, setTimerId] = useRecoilState(timerIdState);

  const prevNewsTarget = (currentNewsCompanyIdx, subscribeListLen) => {
    const prevCompanyIdx = currentNewsCompanyIdx - 1;
    if (prevCompanyIdx < 0) {
      setTargetId(subscribeList[subscribeListLen - 1]);
      return false;
    }

    setTargetId(subscribeList[prevCompanyIdx]);
  };

  const nextNewsTarget = (currentNewsCompanyIdx, subscribeListLen) => {
    const nextCompanyIdx = currentNewsCompanyIdx + 1;
    if (subscribeListLen <= nextCompanyIdx) {
      setTargetId(subscribeList[0]);
      return false;
    }

    setTargetId(subscribeList[nextCompanyIdx]);
  };

  const moveNewsCompany = (action = HEADER_BTN.NEXT.title) => {
    const subscribeListLen = subscribeList.length;
    let currentNewsCompanyIdx = subscribeList.indexOf(targetId);
    if (currentNewsCompanyIdx !== -1) {
      if (action === HEADER_BTN.NEXT.title) return nextNewsTarget(currentNewsCompanyIdx, subscribeListLen);

      if (action === HEADER_BTN.PREV.title) return prevNewsTarget(currentNewsCompanyIdx, subscribeListLen);
    }
  };

  const handleClickArrow = ({ target: { name } }) => moveNewsCompany(name);

  const changeMode = ({ target: { name } }) => {
    setNewsMode(name);
  };

  const MyNewsBtnList = () => {
    if (path === routes.mynews.path) {
      return (
        <MyNewsBtnWrap>
          <button name={MODE.LIST} onClick={changeMode}>
            {MODE.LIST}
          </button>
          <button name={MODE.CARD} onClick={changeMode}>
            {MODE.CARD}
          </button>
        </MyNewsBtnWrap>
      );
    }
    return null;
  };

  useEffect(() => {
    setPath(currentPath);
  }, [currentPath]);

  useEffect(() => {
    clearTimeout(timerId);
    const isMySubscribeNewsListMode = path === routes.mynews.path && newsMode === MODE.LIST;
    if (isMySubscribeNewsListMode) {
      const timer = setTimeout(() => {
        moveNewsCompany();
      }, 6000);

      setTimerId(timer);
    }
  }, [targetId]);

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
