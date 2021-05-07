import React, { useEffect } from 'react';
import { NewsStandListWrap, NewsStandNav } from './NewsStandList.style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { mySubscribeNewsCompanyListSelector, myTargetNewsState } from '@recoil/news';
import SubscribingCompany from './SubscribingCompany/SubscribingCompany';

const NewsStandList = () => {
  const [myTargetNews, setMyTargetNews] = useRecoilState(myTargetNewsState);
  const companyNameList = useRecoilValue(mySubscribeNewsCompanyListSelector);
  useEffect(() => {
    setMyTargetNews(companyNameList[0]?.id);
  }, []);
  const NewsPublishers = () => {
    if (companyNameList.length) {
      return companyNameList.map(({ id, company }) => (
        <SubscribingCompany
          key={id}
          {...{
            id,
            company,
            myTargetNews,
            setMyTargetNews,
          }}
        />
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
