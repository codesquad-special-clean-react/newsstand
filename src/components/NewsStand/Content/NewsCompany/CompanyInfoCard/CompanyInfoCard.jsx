import React from 'react';
import { useRecoilValue } from 'recoil';
import { mySubscribeNewsCompanyList } from '@recoilStore/news';
import { Card, CardBtn } from './CompanyInfoCard.style';
import { COMPANY_CARD } from '@utils/constant';
import { useSubscribe } from '@hooks/useSubscribe';

const SubScribeBtn = ({ id }) => {
  const myNewsStandList = useRecoilValue(mySubscribeNewsCompanyList);
  const isSubscribeCompany = myNewsStandList.some((subscribeId) => subscribeId === id);
  const { onSubscribe, onUnSubscribe } = useSubscribe();

  const handleSubscribe = ({
    target: {
      dataset: { id },
    },
  }) => onSubscribe(id);

  const handleUnSubscribe = ({
    target: {
      dataset: { id },
    },
  }) => onUnSubscribe(id);

  if (isSubscribeCompany) {
    return (
      <button data-id={id} onClick={handleUnSubscribe}>
        {COMPANY_CARD.UNSUBSCRIPTION}
      </button>
    );
  }

  return (
    <button data-id={id} onClick={handleSubscribe}>
      {COMPANY_CARD.SUBSCRIPTION}
    </button>
  );
};

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

export default CompanyInfoCard;
