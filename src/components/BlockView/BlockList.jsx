import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { newsState } from '@recoil/state';
import BlockItem from '@blockView/BlockItem';

const BlockList = () => {
  const newsList = useRecoilValue(newsState);
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
    grid-template-columns: repeat(6, 16.6%);
    grid-auto-rows: 100px;
  }
`;

export default BlockList;
