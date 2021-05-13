import React from 'react';
import { useRecoilValue } from 'recoil';
import { newsFetchSelector } from '@recoilStore/news';
import CompanyInfoCard from './CompanyInfoCard/CompanyInfoCard';

const NewsCompany = () => {
  const fetchCompanyList = useRecoilValue(newsFetchSelector);

  const newsCompanyList = fetchCompanyList.map(({ id, company, logoImgUrl }) => (
    <CompanyInfoCard key={id} {...{ id, company, logoImgUrl }} />
  ));

  return <>{newsCompanyList}</>;
};

export default NewsCompany;
