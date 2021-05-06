import React from 'react';
import { useRecoilValue } from 'recoil';
import { newsFetchSelector } from '../../../../recoil/news';
import CompanyInfoCard from './CompanyInfoCard/CompanyInfoCard';

const NewsCompany = () => {
  const fetchCompanyList = useRecoilValue(newsFetchSelector);
  const NewsCompanyList = fetchCompanyList.map(({ id, company, logoImgUrl }) => (
    <CompanyInfoCard key={id} {...{ id, company, logoImgUrl }} />
  ));

  return NewsCompanyList;
};

export default NewsCompany;
