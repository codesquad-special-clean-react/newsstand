import React from 'react';
import NewsStandList from './NewsStandList/NewsStandList';
import NewsContent from './NewsContent/NewsContent';
import { myNewsModeState, mySubscribeNewsCompanyListSelector } from '@recoil/news';
import { useRecoilValue } from 'recoil';
import CompanyInfoCard from '../NewsCompany/CompanyInfoCard/CompanyInfoCard';

const MyNewsList = () => {
  return (
    <>
      <NewsStandList />
      <NewsContent />
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
  const mode = useRecoilValue(myNewsModeState);

  const Content = {
    LIST: <MyNewsList />,
    CARD: <MyNewsCards />,
  };

  return Content[mode];
};

export default MyNews;
