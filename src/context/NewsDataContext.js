import { createContext, useEffect, useState } from "react";
import { requestNewsData } from '../utils/api';

const initialNewsData = [];
const NewsDataContext = createContext(initialNewsData);

const NewsDataContextProvider = ({ children }) => {
    const [newsData, setNewsData] = useState([]);
    const [subscribedPressList, subscribePress] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await requestNewsData();
            setNewsData(data);
        })();
    }, []);

    return <NewsDataContext.Provider value={{ newsData, setNewsData, subscribedPressList, subscribePress }}>
        { children }
    </NewsDataContext.Provider>
};

export { NewsDataContext, NewsDataContextProvider };