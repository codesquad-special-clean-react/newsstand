import React, { useEffect } from 'react';
import { NewsStandListWrap, NewsStandNav } from './NewsStandList.style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentNewsSelector, mySubscribeNewsCompanyListSelector } from '@recoilStore/news';
import SubscribingCompany from './SubscribingCompany/SubscribingCompany';

const NewsStandList = () => {
  const [currentNews, setCurrentNews] = useRecoilState(currentNewsSelector);
  const companyNameList = useRecoilValue(mySubscribeNewsCompanyListSelector);

  useEffect(() => {
    setCurrentNews(companyNameList[0]?.id);
  }, []);

  const NewsPublishers = () => {
    if (companyNameList.length) {
      return companyNameList.map(({ id, company }) => (
        <SubscribingCompany key={id} {...{ id, company, myTargetNews: currentNews, setMyTargetNews: setCurrentNews }} />
      ));
    }
    return null;
  };

  return (
    <NewsStandNav>
      <NewsStandListWrap>
        <NewsPublishers />
      </NewsStandListWrap>
    </NewsStandNav>
  );
};

export default NewsStandList;
