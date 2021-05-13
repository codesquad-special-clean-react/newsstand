import MyNewsCard from "../components/mynewsCard/MyNewsCard";
import MyNewsList from "../components/mynewsList/MyNewsList";
import Press from "../components/press/Press";

const routes = {
    mynews: {
        path: '/mynews',
        list: {
            path: `/mynews/list`,
            component: <MyNewsList />
        },
        card: {
            path: `/mynews/card`,
            component: <MyNewsCard />
        }
    },
    press: {
        path: '/press',
        total: {
            path: `/press/total`,
            component: <Press />
        }
    }
}

export { routes };