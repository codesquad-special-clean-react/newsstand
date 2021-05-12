import { useSetRecoilState } from 'recoil';
import { myNewsSubscribeState } from '@recoilStore/news';

export const useSubscribe = () => {
  const setMyNewsStandList = useSetRecoilState(myNewsSubscribeState);

  const onSubscribe = (id) => {
    setMyNewsStandList((subscribeList) => [...subscribeList, id]);
  };

  const onUnSubscribe = (id) => setMyNewsStandList((list) => list.filter((subscribeId) => subscribeId !== id));

  return {
    onSubscribe,
    onUnSubscribe,
  };
};
