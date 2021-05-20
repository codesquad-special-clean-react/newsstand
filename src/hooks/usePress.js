import {useState} from 'react';
import {useRecoilState} from 'recoil';
import subscribedIdsAtom from '../recoil/subscribe';

const usePress = () => {
  const [subscribedNewsIds, subscribeNewsWithId] = useRecoilState(subscribedIdsAtom);


  const [hoveredPressOrders, setHoveredPressOrder] = useState(null);

  const handleSubscribe = (pressId) => {
    const isSubscribed = subscribedNewsIds.includes(pressId);
    if (isSubscribed) {
      subscribeNewsWithId(subscribedNewsIds.filter((id) => id !== pressId));
      return;
    }

    subscribeNewsWithId([...subscribedNewsIds, pressId]);
  };

  return {hoveredPressOrders, setHoveredPressOrder, handleSubscribe};
};

export default usePress;
