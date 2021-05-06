import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { myNewsState } from '@recoil/state';

const HoverItem = ({ newsId, subscribe }) => {
  const [myNews, setMyNews] = useRecoilState(myNewsState);

  const onSubscribe = () => setMyNews(myNews.concat(newsId));
  const onUnsubscribe = () => setMyNews(myNews.filter((id) => id !== newsId));

  return (
    <HoverItemWrapper>
      {subscribe ? (
        <button onClick={onUnsubscribe}>해지</button>
      ) : (
        <button onClick={onSubscribe}>구독</button>
      )}
      <button>기사보기</button>
    </HoverItemWrapper>
  );
};

const HoverItemWrapper = styled.div`
  border: 1px solid #e5e9ef;
  display: flex;
  height: 2em;

  & > button {
    border-left: 1px solid #e5e9ef;
    background: white;
  }
`;

export default HoverItem;
