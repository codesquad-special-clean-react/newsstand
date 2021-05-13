import React from 'react';
import NewsStandList from './NewsStandList/NewsStandList';
import NewsContent from './NewsContent/NewsContent';
import { mySubscribeNewsCompanyListSelector, viewModeState } from '@recoilStore/news';
import { useRecoilValue } from 'recoil';
import CompanyInfoCard from '../NewsCompany/CompanyInfoCard/CompanyInfoCard';
import styled from 'styled-components';
import { useTransition } from '@hooks';

const MyNewsList = () => {
  const subscribeList = useRecoilValue(mySubscribeNewsCompanyListSelector);
  const { ulStyles, onTransitionEnd } = useTransition({ subscribeList });
  const subscribeListComponent = subscribeList.map(({ id, company, thumbnews, newslist }, idx) => (
    <NewsContent key={id} {...{ id, company, thumbnews, newslist, idx }} />
  ));

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
  const viewMode = useRecoilValue(viewModeState);
  const Content = {
    LIST: <MyNewsList />,
    CARD: <MyNewsCards />,
  };

  return Content[viewMode];
};

export default MyNews;

const MyNewsListWrap = styled.ul`
  display: flex;
  transition: all 3s;
`;
const CarouselComponent = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  max-width: 1050px;
  overflow: hidden;
`;
