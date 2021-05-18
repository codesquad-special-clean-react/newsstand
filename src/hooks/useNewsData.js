import { useContext, useState, useEffect } from "react"
import { NewsDataContext } from "../context/NewsDataContext"

const useNewsData = (pageSize = 5) => {
    const { newsData, subscribedNewsData } = useContext(NewsDataContext);

    const [page, setPage] = useState(0);
    const [maximumPage, setMaximumPage] = useState(0);
    const [selectedPressIdx, selectPressIdx] = useState(null);

    const getItemsForPage = (items) => {
        const startIndex = page * pageSize;
        const endIndex = startIndex + pageSize;
        return items.slice(startIndex, endIndex);
    }

    useEffect(() => {
        setMaximumPage(Math.ceil(newsData.length / pageSize) - 1);
    }, [newsData, pageSize]);
    
    useEffect(() => {
        if(subscribedNewsData.length === 0 ) return;
        selectPressIdx(subscribedNewsData[0].id);
    }, [subscribedNewsData]);

    const pageUp = setPage.bind(null, page === maximumPage ? page : page + 1);
    const pageDown = setPage.bind(null, page === 0 ? 0 : page - 1);

    const isSubscribed = (pressId) => {
        return subscribedNewsData.filter(({id}) => id === pressId).length === 1;
    } 

return { newsData, pageUp, pageDown, selectedPressIdx, selectPressIdx, isSubscribed, subscribedNewsData };
}

export default useNewsData;