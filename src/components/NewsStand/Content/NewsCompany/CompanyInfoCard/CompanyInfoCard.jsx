import React from 'react';
import { Card, CardBtn } from './CompanyInfoCard.style';
import { COMPANY_CARD } from '@utils/constant';
import SubScribeBtn from './SubScribeBtn';

const CompanyInfoCard = ({ id, company, logoImgUrl }) => {
  return (
    <Card>
      <img alt={company} src={logoImgUrl} loading="lazy" />
      <CardBtn className="popup_wrap">
        <SubScribeBtn id={id} />
        <button>{COMPANY_CARD.READ_NEWS}</button>
      </CardBtn>
    </Card>
  );
};

export default React.memo(CompanyInfoCard, (prev, next) => {
  return prev.id === next.id;
});
