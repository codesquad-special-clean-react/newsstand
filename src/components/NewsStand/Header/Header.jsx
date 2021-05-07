import React, { useContext, useEffect } from 'react';
import { HistoryContext, Link, routes } from '../../../util/Router';
import { myNewsModeState, myNewsSubscribeState, myTargetNewsState, pathState } from '../../../recoil/news';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { DirectionBtnWrap, HeaderWrap, MyNewsBtnWrap, NewsStandSortBtnWrap, RightControlBtnWrap } from './Header.style';

const Header = () => {
  const { currentPath } = useContext(HistoryContext);
  const [path, setPath] = useRecoilState(pathState);
  const [targetId, setTargetId] = useRecoilState(myTargetNewsState);
  const subscribeList = useRecoilValue(myNewsSubscribeState);
  const setNewsMode = useSetRecoilState(myNewsModeState);

  useEffect(() => {
    setPath(currentPath);
  }, [currentPath]);

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

  const moveNewsCompany = ({ target: { name } }) => {
    const subscribeListLen = subscribeList.length;
    let currentNewsCompanyIdx = subscribeList.indexOf(targetId);
    if (currentNewsCompanyIdx !== -1) {
      if (name === 'next') return nextNewsTarget(currentNewsCompanyIdx, subscribeListLen);

      if (name === 'prev') return prevNewsTarget(currentNewsCompanyIdx, subscribeListLen);
    }
  };

  const changeMode = ({ target: { name } }) => {
    setNewsMode(name);
  };

  const MyNewsBtnList = () => {
    if (path === '/mynews') {
      return (
        <MyNewsBtnWrap>
          <button name="list" onClick={changeMode}>
            List
          </button>
          <button name="card" onClick={changeMode}>
            Card
          </button>
        </MyNewsBtnWrap>
      );
    }
    return null;
  };
  return (
    <HeaderWrap>
      <NewsStandSortBtnWrap>
        <Link to={routes.mynews.path}>구독한 언론사</Link>
        <Link to={routes.newscompany.path}>전체 언론사</Link>
      </NewsStandSortBtnWrap>
      <RightControlBtnWrap>
        <MyNewsBtnList />
        <DirectionBtnWrap>
          <button name="prev" onClick={moveNewsCompany}>
            ←
          </button>
          <button name="next" onClick={moveNewsCompany}>
            →
          </button>
        </DirectionBtnWrap>
      </RightControlBtnWrap>
    </HeaderWrap>
  );
};

export default Header;
