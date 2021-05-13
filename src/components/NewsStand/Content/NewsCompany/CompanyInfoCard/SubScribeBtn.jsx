import { useRecoilValue } from 'recoil';
import React, { useCallback } from 'react';
import { mySubscribeNewsCompanyList } from '@recoilStore/news';
import { useSubscribe } from '@hooks/useSubscribe';
import { COMPANY_CARD } from '@utils/constant';

const SubScribeBtn = ({ id }) => {
  const myNewsStandList = useRecoilValue(mySubscribeNewsCompanyList);
  const isSubscribeCompany = myNewsStandList.some((subscribeId) => subscribeId === id);
  const { onSubscribe, onUnSubscribe } = useSubscribe();

  const handleSubscribe = useCallback(
    ({
      target: {
        dataset: { id },
      },
    }) => onSubscribe(id),
    [id]
  );

  const handleUnSubscribe = useCallback(
    ({
      target: {
        dataset: { id },
      },
    }) => onUnSubscribe(id),
    [id]
  );

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

export default React.memo(SubScribeBtn);
