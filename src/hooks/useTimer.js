import { useRecoilState, useRecoilValue } from 'recoil';
import { currentNewsSelector, timerIdState, viewModeState } from '@recoilStore/news';
import { useEffect } from 'react';
import { routes } from '@router';
import { MODE, TIMEOUT } from '@utils/constant';

export const useTimer = ({ path, changeCurrentNews }) => {
  const [timerId, setTimerId] = useRecoilState(timerIdState);
  const currentNewsTarget = useRecoilValue(currentNewsSelector);
  const viewMode = useRecoilValue(viewModeState);

  useEffect(() => {
    clearTimeout(timerId);
    const isMySubscribeNewsListMode = path === routes.mynews.path && viewMode === MODE.LIST;
    if (isMySubscribeNewsListMode) {
      const timer = setTimeout(() => {
        changeCurrentNews();
      }, TIMEOUT);

      setTimerId(timer);
    }
    return () => clearTimeout(timerId);
  }, [currentNewsTarget]);
};
