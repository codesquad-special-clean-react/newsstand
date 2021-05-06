import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { HistoryContext, Link, routes } from '../../../util/Router';
import { pathState } from '../../../recoil/news';
import { useRecoilState } from 'recoil';

const HeaderWrap = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewsStandSortBtnWrap = styled.div`
  margin-left: 10px;

  a {
    margin-right: 10px;
    font-size: 14px;
    color: #505050;
    cursor: pointer;
  }
`;

const RightControlBtnWrap = styled.div`
  display: flex;
  margin-right: 10px;
  font-size: 14px;
  color: #505050;

  button {
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    padding: 7px 8px 5px;
    background-color: #fff;
    border: 1px solid #dae1e6;
    font-size: 12px;
    line-height: 16px;
    color: #505050;
    vertical-align: top;
    text-decoration: none;
  }
`;

const MyNewsBtnWrap = styled.div`
  display: flex;
  margin-right: 10px;
`;

const DirectionBtnWrap = styled.div`
  display: flex;
`;

const Header = () => {
  const { currentPath } = useContext(HistoryContext);
  const [path, setPath] = useRecoilState(pathState);

  useEffect(() => {
    setPath(currentPath);
  }, [currentPath]);
  return (
    <HeaderWrap>
      <NewsStandSortBtnWrap>
        <Link to={routes.mynews.path}>구독한 언론사</Link>
        <Link to={routes.newscompany.path}>전체 언론사</Link>
      </NewsStandSortBtnWrap>
      <RightControlBtnWrap>
        {path === '/mynews' && (
          <MyNewsBtnWrap>
            <button>List</button>
            <button>Card</button>
          </MyNewsBtnWrap>
        )}
        <DirectionBtnWrap>
          <button>←</button>
          <button>→</button>
        </DirectionBtnWrap>
      </RightControlBtnWrap>
    </HeaderWrap>
  );
};

export default Header;
