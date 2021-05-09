import { Navigation, Layout, LayoutSelector, Menu } from "./styles";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { CATEGORIES } from "constants/categories";
import { LAYOUTS } from "../../../constants/layouts";
const HeaderNavigation = () => {
  const history = useHistory();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const handleClickMenu = (category) => () => {
    history.push({
      pathname: "/",
      search: `?${queryString.stringify({ ...query, category })}`,
    });
  };
  const handleClickLayout = (layout) => () => {
    history.push({
      pathname: "/",
      search: `?${queryString.stringify({ ...query, layout })}`,
    });
  };

  return (
    <Navigation>
      <div>
        <Menu
          onClick={handleClickMenu(CATEGORIES.ALL)}
          isActive={query.category === CATEGORIES.ALL}
        >
          전체 언론사
        </Menu>
        <Menu
          onClick={handleClickMenu(CATEGORIES.MY)}
          isActive={query.category === CATEGORIES.MY}
        >
          MY 뉴스
        </Menu>
      </div>
      <LayoutSelector>
        <Layout
          onClick={handleClickLayout(LAYOUTS.CARD)}
          isActive={query.layout === LAYOUTS.CARD}
        >
          카드
        </Layout>
        <Layout
          onClick={handleClickLayout(LAYOUTS.LIST)}
          isActive={query.layout === LAYOUTS.LIST}
        >
          리스트
        </Layout>
      </LayoutSelector>
    </Navigation>
  );
};

export default HeaderNavigation;
