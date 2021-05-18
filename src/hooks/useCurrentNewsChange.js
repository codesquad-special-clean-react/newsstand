import { useRecoilState, useRecoilValue } from 'recoil';
import { currentNewsSelector, mySubscribeNewsCompanyList } from '@recoilStore/news';
import { HEADER_BTN } from '@utils/constant';

export const useCurrentNewsChange = () => {
  const [targetId, setTargetId] = useRecoilState(currentNewsSelector);
  const subscribeList = useRecoilValue(mySubscribeNewsCompanyList);

  const prevNewsTarget = (currentNewsCompanyIdx, subscribeListLen) => {
    const prevCompanyIdx = currentNewsCompanyIdx - 1;
    if (prevCompanyIdx < 0) {
      setTargetId(subscribeList[subscribeListLen - 1]);
      return false;
    }

    setTargetId(subscribeList[prevCompanyIdx]);
  };

  const nextNewsTarget = (currentNewsCompanyIdx, subscribeListLen) => {
    const nextCompanyIdx = currentNewsCompanyIdx + 1;
    if (subscribeListLen <= nextCompanyIdx) {
      setTargetId(subscribeList[0]);
      return false;
    }

    setTargetId(subscribeList[nextCompanyIdx]);
  };

  const changeCurrentNews = (action = HEADER_BTN.NEXT.title) => {
    const subscribeListLen = subscribeList.length;
    let currentNewsCompanyIdx = subscribeList.indexOf(targetId);
    if (currentNewsCompanyIdx !== -1) {
      if (action === HEADER_BTN.NEXT.title) return nextNewsTarget(currentNewsCompanyIdx, subscribeListLen);

      if (action === HEADER_BTN.PREV.title) return prevNewsTarget(currentNewsCompanyIdx, subscribeListLen);
    }
  };

  return {
    changeCurrentNews,
  };
};
