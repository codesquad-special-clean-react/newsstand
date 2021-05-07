import React from 'react';
import { useRecoilState } from 'recoil';
import { myNewsSubscribeState } from '../../../../../recoil/news';
import { Card, CardBtn } from './CompanyInfoCard.style';
import { COMPANY_CARD } from '../../../../../util/constant';

const CompanyInfoCard = ({ id, company, logoImgUrl }) => {
  const [myNewsStandList, setMyNewsStandList] = useRecoilState(myNewsSubscribeState);
  const isSubscribeCompany = myNewsStandList.some((subscribeId) => subscribeId === id);

  const handleSubscribe = () => {
    setMyNewsStandList((subscribeList) => [...subscribeList, id]);
  };

  const handleUnSubscribe = () => {
    setMyNewsStandList((list) => {
      return list.filter((subscribeId) => subscribeId !== id);
    });
  };

  const SubScribeBtn = () => {
    if (isSubscribeCompany) {
      return <button onClick={handleUnSubscribe}>{COMPANY_CARD.UNSUBSCRIPTION}</button>;
    }

    return <button onClick={handleSubscribe}>{COMPANY_CARD.SUBSCRIPTION}</button>;
  };

  return (
    <Card>
      <img alt={company} src={logoImgUrl} loading="lazy" />
      <CardBtn className="popup_wrap">
        <SubScribeBtn />
        <button>{COMPANY_CARD.READ_NEWS}</button>
      </CardBtn>
    </Card>
  );
};

export default CompanyInfoCard;
