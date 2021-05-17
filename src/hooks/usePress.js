import { useContext, useState } from "react";
import { NewsDataContext } from "../context/NewsDataContext";

const usePress = () => {
    const { newsData, subscribedNewsData, subscribeNewsData } = useContext(NewsDataContext);
    const [hoveredPressOrders, setHoveredPressOrder] = useState(null);

    const handleSubscribe = (pressId) => {
        const [isSubscribed] = subscribedNewsData.filter(({id}) => id === pressId);
        if(isSubscribed) {
            subscribeNewsData(subscribedNewsData.filter(({id}) => id !== pressId));
            return;
        }

        const [subscribingPress] = newsData.filter(({id}) => id === pressId);
        if(!subscribingPress){
            return;
        }

        subscribeNewsData([...subscribedNewsData, subscribingPress]);
    }
    
    return { hoveredPressOrders, setHoveredPressOrder, handleSubscribe };
};

export default usePress;