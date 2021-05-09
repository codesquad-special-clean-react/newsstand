import { useEffect, useContext, useState } from "react";
import { RouterContext } from "../context/RouterContext"
import { routes } from "../router/routes";

const useRoute = () => {
    const { route } = useContext(RouterContext);
    const [isMyNewsListSelected, selectMyNewsList] = useState(true);
    const [isMyNewsCardSelected, selectMyNewsCard] = useState(false);
    const [isMyNewsSelected, selectMyNews] = useState(isMyNewsListSelected || isMyNewsCardSelected);
    const [isPressSelected, selectPress] = useState(false);

    useEffect(() => {
        const {path} = route;

        selectMyNewsList(path === routes.mynews.list.path);
        selectMyNewsCard(path === routes.mynews.card.path);
        selectPress(path === routes.press.total.path);
    }, [route.path]);

    useEffect(() => {
        selectMyNews(isMyNewsListSelected || isMyNewsCardSelected);
    }, [isMyNewsListSelected, isMyNewsCardSelected]);

    return { route, isMyNewsListSelected, isMyNewsCardSelected, isPressSelected, isMyNewsSelected };
};

export default useRoute;