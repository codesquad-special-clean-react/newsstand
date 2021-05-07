import React, { useContext, useEffect } from "react";
import { HistoryContext, Link, routes } from "../../../util/Router";
import { myNewsSubscribeState, myTargetNewsState, pathState } from "../../../recoil/news";
import { useRecoilState, useRecoilValue } from "recoil";
import { DirectionBtnWrap, HeaderWrap, MyNewsBtnWrap, NewsStandSortBtnWrap, RightControlBtnWrap } from "./Header.style";

const Header = () => {
  const { currentPath } = useContext(HistoryContext);
  const [path, setPath] = useRecoilState(pathState);
  const [targetId, setTargetId] = useRecoilState(myTargetNewsState);
  const subscribeList = useRecoilValue(myNewsSubscribeState);

  useEffect(() => {
    setPath(currentPath);
  }, [currentPath]);

  const prevNewsTarget = (index, len) => {
    const prevTarget = index - 1;
    if (prevTarget < 0) {
      setTargetId(subscribeList[len - 1]);
      return false;
    }

    setTargetId(subscribeList[prevTarget]);
  };

  const nextNewsTarget = (index, len) => {
    const nextTarget = index + 1;
    if (len <= nextTarget) {
      setTargetId(subscribeList[0]);
      return false;
    }

    setTargetId(subscribeList[nextTarget]);
  };

  const moveNewsCompany = ({ target: { name } }) => {
    const len = subscribeList.length;
    let index = subscribeList.indexOf(targetId);
    if (index !== -1) {
      if (name === "next") return nextNewsTarget(index, len);

      if (name === "prev") return prevNewsTarget(index, len);
    }
  };

  const MyNewsBtnList = () => {
    if (path === '/mynews') {
      return (
        <MyNewsBtnWrap>
          <button>List</button>
          <button>Card</button>
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
