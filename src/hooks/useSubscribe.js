import { useSetRecoilState } from 'recoil';
import { mySubscribeNewsCompanyList } from '@recoilStore/news';

export const useSubscribe = () => {
  const setMyNewsStandList = useSetRecoilState(mySubscribeNewsCompanyList);

  const onSubscribe = (id) => {
    setMyNewsStandList((subscribeList) => [...subscribeList, id]);
  };

  const onUnSubscribe = (id) => setMyNewsStandList((list) => list.filter((subscribeId) => subscribeId !== id));

  return {
    onSubscribe,
    onUnSubscribe,
  };
};
