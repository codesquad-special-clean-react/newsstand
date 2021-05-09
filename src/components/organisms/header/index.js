import {
  Breadcrumb,
  Divider,
  Layout,
  LayoutSelector,
  Menu,
  Navigator,
  Navigators,
  StyledHeader,
  Title,
} from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Breadcrumb>
        <Menu>뉴스스탠드</Menu>
        <Divider>></Divider>
        <Menu>전체 언론사</Menu>
      </Breadcrumb>
      <Title>
        <span>MY 뉴스</span>
        <LayoutSelector>
          <Layout>카드</Layout>
          <Layout>리스트</Layout>
        </LayoutSelector>
      </Title>
      <Navigators>
        <Navigator>{"<"}</Navigator>
        <Navigator>{">"}</Navigator>
      </Navigators>
    </StyledHeader>
  );
};

export default Header;
