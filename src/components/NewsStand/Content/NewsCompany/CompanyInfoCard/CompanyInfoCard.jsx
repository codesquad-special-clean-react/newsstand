import React from 'react';
import { useRecoilState } from 'recoil';
import { myNewsSubscribeState } from '../../../../../recoil/news';
import { Card, CardBtn } from './CompanyInfoCard.style';

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
      return <button onClick={handleUnSubscribe}>해제</button>;
    }

    return <button onClick={handleSubscribe}>구독</button>;
  };

  return (
    <Card>
      <img alt={company} src={logoImgUrl} loading="lazy" />
      <CardBtn className="popup_wrap">
        <SubScribeBtn />
        <button>기사보기</button>
      </CardBtn>
    </Card>
  );
};

export default CompanyInfoCard;
