import { useRecoilState } from "recoil";
import { newsListState } from "../recoils/atoms";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { CATEGORIES } from "../constants/categories";

const useFilteredNewsList = () => {
  const [newsList] = useRecoilState(newsListState);
  const location = useLocation();
  const query = queryString.parse(location.search);
  return newsList.filter((n) => {
    if (query.category === CATEGORIES.ALL) {
      return true;
    }
    return n.isSubscription;
  });
};

export default useFilteredNewsList;
