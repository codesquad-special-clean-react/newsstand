import React from 'react';
import { useRecoilValue } from 'recoil';
import { newsSelector } from '../../../../recoil/news';
import CompanyInfoCard from './CompanyInfoCard';

const NewsCompany = () => {
  const fetchCompanyList = useRecoilValue(newsSelector);
  const newsCompanyList = fetchCompanyList.map(({ id, company, logoImgUrl }) => (
    <CompanyInfoCard key={id} {...{ id, company, logoImgUrl }} />
  ));

  return <>{newsCompanyList}</>;
};

export default NewsCompany;
