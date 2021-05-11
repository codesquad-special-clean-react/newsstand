import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { menuState, newsState } from '@recoil/state';
import BlockItem from '@blockView/BlockItem';
import { MENU } from '@utils/constant';

const BlockList = () => {
  const menu = useRecoilValue(menuState);
  let newsList = useRecoilValue(newsState);

  if (menu === MENU.MY_NEWS) {
    newsList = newsList.filter((news) => news.subscribe);
  }

  const NewsList = (
    <ul>
      {newsList.map((news) => (
        <BlockItem key={news.id} news={news} />
      ))}
    </ul>
  );

  return <BlockListWrapper>{NewsList}</BlockListWrapper>;
};

const BlockListWrapper = styled.div`
  background: white;

  ul {
    display: grid;
    grid-template-rows: repeat(1, 100px);
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 100px;
  }
`;

export default BlockList;
