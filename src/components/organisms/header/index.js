import { Breadcrumb, Divider, StyledHeader } from "./styles";
import HeaderNavigators from "../../molecules/header-navigators";
import HeaderNavigation from "../../molecules/header-navigation";
const Header = () => {
  return (
    <StyledHeader>
      <Breadcrumb>
        <span>뉴스스탠드</span>
        <Divider>></Divider>
      </Breadcrumb>
      <HeaderNavigation />
      <HeaderNavigators />
    </StyledHeader>
  );
};

export default Header;
