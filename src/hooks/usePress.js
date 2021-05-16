import { useContext, useState } from "react";
import { NewsDataContext } from "../context/NewsDataContext";

const usePress = () => {
    const { newsData, subscribedPressList, subscribePress } = useContext(NewsDataContext);
    const [hoveredPressOrders, setHoveredPressOrder] = useState(null);

    const handleSubscribe = (pressId) => {
        const [isSubscribed] = subscribedPressList.filter(({id}) => id === pressId);
        if(isSubscribed) {
            subscribePress(subscribedPressList.filter(({id}) => id !== pressId));
            return;
        }

        const [subscribingPress] = newsData.filter(({id}) => id === pressId);
        if(!subscribingPress){
            return;
        }

        subscribePress([...subscribedPressList, subscribingPress]);
    }
    
    return { hoveredPressOrders, setHoveredPressOrder, handleSubscribe };
};

export default usePress;