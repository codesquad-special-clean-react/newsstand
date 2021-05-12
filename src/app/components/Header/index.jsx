import {
  Text,
  Button,
  Flex,
  VisuallyHidden,
  ListViewIcon,
  TileIcon,
} from "components";

const Header = () => (
  <Flex as="header">
    <Flex as="section">
      <Text as="h2">뉴스스탠드</Text>
      <Text as="h2">전체 언론사</Text>
    </Flex>
    <Flex as="section">
      <Text as="h2">MY 뉴스</Text>
      <Flex>
        <Button variant="ghost">
          <ListViewIcon />
          <VisuallyHidden>목록형</VisuallyHidden>
        </Button>
        <Button variant="ghost">
          <TileIcon />
          <VisuallyHidden>카드형</VisuallyHidden>
        </Button>
      </Flex>
    </Flex>
    <Flex>
      <Button variant="squared">{"<"}</Button>
      <Button variant="squared">{">"}</Button>
    </Flex>
  </Flex>
);

export default Header;
