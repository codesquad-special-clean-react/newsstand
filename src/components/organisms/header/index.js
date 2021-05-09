import {
  Breadcrumb,
  Divider,
  Layout,
  LayoutSelector,
  Menu,
  StyledHeader,
  Title,
} from "./styles";
import HeaderNavigators from "../../molecules/header-navigators";
const Header = () => {
  return (
    <StyledHeader>
      <Breadcrumb>
        <span>뉴스스탠드</span>
        <Divider>></Divider>
      </Breadcrumb>
      <Title>
        <div>
          <Menu>전체 언론사</Menu>
          <Menu>MY 뉴스</Menu>
        </div>
        <LayoutSelector>
          <Layout>카드</Layout>
          <Layout>리스트</Layout>
        </LayoutSelector>
      </Title>
      <HeaderNavigators />
    </StyledHeader>
  );
};

export default Header;
