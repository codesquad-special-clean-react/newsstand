import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { carouselMoveState, carouselXSelector, transitionState } from '@recoilStore/news';
import { useEffect } from 'react';
import { CAROUSEL_WIDTH } from '@utils/constant';

export const useTransition = ({ subscribeList }) => {
  const panelCount = subscribeList.length;

  const [x, setX] = useRecoilState(carouselXSelector);
  const setMoving = useSetRecoilState(carouselMoveState);
  const [transitionsValue, setTransitionValue] = useRecoilState(transitionState);
  const resetTransition = useResetRecoilState(transitionState);

  const onTransitionEnd = () => {
    setMoving(false);
    if (x === -CAROUSEL_WIDTH * panelCount) {
      setTransitionValue('none');
      setX(0);
    } else if (x === CAROUSEL_WIDTH) {
      setTransitionValue('none');
      setX(-CAROUSEL_WIDTH * (panelCount - 1));
    }
  };

  const ulStyles = {
    transform: `translate3d(${x}px, 0, 0)`,
    transition: transitionsValue,
  };

  useEffect(() => {
    if (transitionsValue === 'none') resetTransition();
  }, [transitionsValue]);

  return {
    ulStyles,
    onTransitionEnd,
  };
};
