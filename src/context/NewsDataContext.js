import { createContext, useEffect, useState } from "react";
import { requestNewsData } from '../utils/api';

const defaultValue = {
    newsData: [],
    setNewsData: () => {},
    subscribedNewsData: [],
    subscribeNewsData: () => {}
};
const NewsDataContext = createContext(defaultValue);

const NewsDataContextProvider = ({ children }) => {
    const [newsData, setNewsData] = useState([]);
    const [subscribedNewsData, subscribeNewsData] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await requestNewsData();
            setNewsData(data);
        })();
    }, []);

    return <NewsDataContext.Provider value={{ newsData, setNewsData, subscribedNewsData, subscribeNewsData }}>
        { children }
    </NewsDataContext.Provider>
};

export { NewsDataContext, NewsDataContextProvider };