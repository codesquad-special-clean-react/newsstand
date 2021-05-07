import { Flex } from '../commons';
import RightSection from './RightSection';

const Header = () => (
  <Flex>
    <Flex as="section">
      <h2>뉴스스탠드</h2>
      <h2>전체 언론사</h2>
    </Flex>
    <Flex>
      <h2>MY 뉴스</h2>
      <div className="ui-switch">
        <button>카드형</button>
        <button>목록형</button>
      </div>
    </Flex>

    <RightSection />
  </Flex>
);

export default Header;
