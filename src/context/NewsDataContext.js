import { createContext, useEffect, useState } from "react";
import { requestNewsData } from '../utils/api';

const defaultValue = {
    newsData: [],
    setNewsData: () => {},
    subscribedPressList: [],
    subscribePress: () => {}
};
const NewsDataContext = createContext(defaultValue);

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