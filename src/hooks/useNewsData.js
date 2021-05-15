import { useContext, useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { NewsDataContext } from "../context/NewsDataContext"

const useNewsData = (pageSize = 5) => {
    const { newsData } = useContext(NewsDataContext);
    const [presses, setPress] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [thumbNews, setThumbNews] = useState({ imageUrl : '', text : '' });

    const [page, setPage] = useState(0);
    const [maximumPage, setMaximumPage] = useState(0);
    const [selectedPressIdx, selectPressIdx] = useState(0);

    const pressesForPage = (pressList) => {
        const startIndex = page * pageSize;
        const endIndex = startIndex + pageSize;
        return pressList.slice(startIndex, endIndex);
    }

    const getNewsOfPress = (press) => {
        console.log(press, newsData)
        return newsData.filter(({ company }) => company === press);
    }

    useEffect(() => {
        setMaximumPage(Math.ceil(newsData.length / pageSize) - 1);

        const uniquePresses = newsData.map(({ company }) => company);
        setPress(pressesForPage(uniquePresses));
    }, [newsData, pageSize]);

    useEffect(() => {
        if(newsData.length === 0) return;
        const pressName = presses[selectedPressIdx];
        const [news] = getNewsOfPress(pressName);
        console.log(news)
        setNewsList(news.newslist);
        setThumbNews(news.thumbnews);
        
    }, [selectedPressIdx, presses]);

    const pageUp = setPage.bind(null, page === maximumPage ? page : page + 1);
    const pageDown = setPage.bind(null, page === 0 ? 0 : page - 1);

    return { presses, pageUp, pageDown, selectedPressIdx, selectPressIdx, thumbNews, newsList };
}

export default useNewsData;