import React from 'react';
import { Card, CardBtn } from './NewsCompany.style';
import { useRecoilState } from 'recoil';
import { myNewsStandState } from '../../../../recoil/news';

const CompanyInfoCard = ({ id, company, logoImgUrl }) => {
  const [myNewsStandList, setMyNewsStandList] = useRecoilState(myNewsStandState);
  const isSubscribeCompany = myNewsStandList.some((subscribeId) => subscribeId === id);

  const handleSubscribe = () => {
    setMyNewsStandList((subscribeList) => [...subscribeList, id]);
  };

  const handleUnSubscribe = () => {
    setMyNewsStandList((list) => {
      return list.filter((subscribeId) => subscribeId !== id);
    });
  };

  return (
    <Card>
      <img alt={company} src={logoImgUrl} loading="lazy" />
      <CardBtn className="popup_wrap">
        {isSubscribeCompany ? (
          <button onClick={handleUnSubscribe}>해제</button>
        ) : (
          <button onClick={handleSubscribe}>구독</button>
        )}

        <button>기사보기</button>
      </CardBtn>
    </Card>
  );
};

export default CompanyInfoCard;
