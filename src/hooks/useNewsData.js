import { useContext, useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { NewsDataContext } from "../context/NewsDataContext"

const useNewsData = (pageSize = 5) => {
    const { newsData, subscribedPressList } = useContext(NewsDataContext);
    const [presses, setPress] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [thumbNews, setThumbNews] = useState({ imageUrl : '', text : '' });

    const [page, setPage] = useState(0);
    const [maximumPage, setMaximumPage] = useState(0);
    const [selectedPressIdx, selectPressIdx] = useState(0);

    const getItemsForPage = (items) => {
        const startIndex = page * pageSize;
        const endIndex = startIndex + pageSize;
        return items.slice(startIndex, endIndex);
    }

    const getNewsOfPress = (press) => {
        return newsData.filter(({ company }) => company === press);
    }

    useEffect(() => {
        setMaximumPage(Math.ceil(newsData.length / pageSize) - 1);

        setPress(getItemsForPage(newsData.map(({ company }) => company)));
    }, [newsData, pageSize]);

    useEffect(() => {
        if(newsData.length === 0) return;
        const pressName = presses[selectedPressIdx];
        const [news] = getNewsOfPress(pressName);

        setNewsList(news.newslist);
        setThumbNews(news.thumbnews);
        
    }, [selectedPressIdx, presses]);

    const pageUp = setPage.bind(null, page === maximumPage ? page : page + 1);
    const pageDown = setPage.bind(null, page === 0 ? 0 : page - 1);

    const isSubscribed = (pressId) => {
        return subscribedPressList.filter(({id}) => id === pressId).length === 1;
    } 

    return { newsData, presses, pageUp, pageDown, selectedPressIdx, selectPressIdx, thumbNews, newsList, isSubscribed };
}

export default useNewsData;