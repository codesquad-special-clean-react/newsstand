import { useRecoilState, useRecoilValue } from 'recoil';
import { myNewsModeState, myTargetNewsState, timerIdState } from '@recoilStore/news';
import { useEffect } from 'react';
import { routes } from '@router';
import { MODE } from '../utils/constant';

export const useTimer = ({ path, moveNewsCompany }) => {
  const [timerId, setTimerId] = useRecoilState(timerIdState);
  const targetId = useRecoilValue(myTargetNewsState);
  const viewMode = useRecoilValue(myNewsModeState);

  useEffect(() => {
    clearTimeout(timerId);
    const isMySubscribeNewsListMode = path === routes.mynews.path && viewMode === MODE.LIST;
    if (isMySubscribeNewsListMode) {
      const timer = setTimeout(() => {
        moveNewsCompany();
      }, 1000);

      setTimerId(timer);
    }
    return () => clearTimeout(timerId);
  }, [targetId]);
  return {};
};
