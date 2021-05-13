import React, { useEffect, useState } from 'react';
import NewsStandList from './NewsStandList/NewsStandList';
import NewsContent from './NewsContent/NewsContent';
import {
  myNewsModeState,
  mySubscribeNewsCompanyListSelector,
  carouselMoveState,
  carouselXSelector,
} from '@recoilStore/news';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import CompanyInfoCard from '../NewsCompany/CompanyInfoCard/CompanyInfoCard';
import styled from 'styled-components';

const MyNewsListWrap = styled.ul`
  display: flex;
  transition: all 3s;
`;
const CarouselComponent = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 1050px;
  overflow: hidden;
  outline: 1px solid blue;
`;

const MyNewsList = () => {
  const subscribeList = useRecoilValue(mySubscribeNewsCompanyListSelector);

  const subscribeListComponent = subscribeList.map(({ id, company, thumbnews, newslist }, idx) => (
    <NewsContent key={id} {...{ id, company, thumbnews, newslist, idx }} />
  ));

  const transitionDefault = 'all .5s';
  const panelWidth = 1050;
  const panelCount = subscribeList.length;

  const [x, setX] = useRecoilState(carouselXSelector);
  const setMoving = useSetRecoilState(carouselMoveState);
  const [trasitionValue, setTransitionValue] = useState(transitionDefault);

  const onTransitionEnd = () => {
    setMoving(false);
    if (x === -panelWidth * panelCount) {
      setTransitionValue('none');
      setX(0);
    } else if (x === 1050) {
      setTransitionValue('none');
      setX(-panelWidth * (panelCount - 1));
    }
  };

  useEffect(() => {
    if (trasitionValue === 'none') setTransitionValue(transitionDefault);
  }, [trasitionValue]);

  const ulStyles = {
    transform: `translate3d(${x}px, 0, 0)`,
    transition: trasitionValue,
  };

  return (
    <>
      <NewsStandList />
      <CarouselComponent>
        <MyNewsListWrap style={ulStyles} onTransitionEnd={onTransitionEnd}>
          {subscribeListComponent}
        </MyNewsListWrap>
      </CarouselComponent>
    </>
  );
};

const MyNewsCards = () => {
  const subscribeList = useRecoilValue(mySubscribeNewsCompanyListSelector);

  const SubscribeList = subscribeList.map(({ id, company, logoImgUrl }) => (
    <CompanyInfoCard key={id} {...{ id, company, logoImgUrl }} />
  ));

  return SubscribeList;
};

const MyNews = () => {
  const viewMode = useRecoilValue(myNewsModeState);
  const Content = {
    LIST: <MyNewsList />,
    CARD: <MyNewsCards />,
  };

  return Content[viewMode];
};

export default MyNews;
