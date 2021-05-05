import styled from 'styled-components';
import { newsState } from '@recoil/state';
import { useRecoilValue } from 'recoil';

const BlockList = () => {
  const newsList = useRecoilValue(newsState);
  console.log(newsList);

  return <BlockListWrapper>BlockList</BlockListWrapper>;
};

const BlockListWrapper = styled.div`
  background: white;
`;

export default BlockList;
