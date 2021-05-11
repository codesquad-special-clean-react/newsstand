import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';

import { myNewsListState } from '@src/recoil/state';

const ListView = () => {
  let newsList = useRecoilValue(myNewsListState);
  const [news, setNews] = useState((newsList.length > 0 && newsList[0]) || []);

  if (!newsList.length) return <EmptyNewsBox></EmptyNewsBox>;

  const onNewsChange = ({ target }) => {
    const company = target.dataset['company'];
    const newsIndex = newsList.map((news) => news.company).indexOf(company);

    setNews(newsList[newsIndex]);
  };

  const MyNewsList = (
    <ul>
      {newsList.map((_news) => (
        <MyNewsItem
          key={_news.id}
          data-company={_news.company}
          onClick={onNewsChange}
          $active={_news.company === news.company}
        >
          {_news.company}
        </MyNewsItem>
      ))}
    </ul>
  );

  const NewsList = (
    <ul>
      {news.newslist.map((news, idx) => (
        <NewsItem key={idx}>{news}</NewsItem>
      ))}
    </ul>
  );

  return (
    <ListViewWrapper>
      <MyListWrapper>{MyNewsList}</MyListWrapper>
      <NewsWrapper>
        <NewsTitle>
          <img src={news.logoImgUrl} alt={news.company} />
        </NewsTitle>
        <NewsContentsWrapper>
          <Thumbnail>
            <img src={news.thumbnews.imageUrl} alt={news.thumbnews.text} />
            <div>{news.thumbnews.text}</div>
          </Thumbnail>
          {NewsList}
        </NewsContentsWrapper>
      </NewsWrapper>
    </ListViewWrapper>
  );
};

// styled
const ListViewWrapper = styled.div`
  background: white;
  display: flex;
`;

const MyListWrapper = styled.aside`
  width: 18%;
  border-right: 1px solid #d6dae0;

  ul {
    display: flex;
    flex-direction: column;
    padding: 1em;
    font-size: 1.3em;
  }
`;

const MyNewsItem = styled.li`
  padding: 0.2em 0;
  cursor: pointer;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);

  ${({ $active }) =>
    $active &&
    css`
      color: #19ce5f;
    `};
`;

const NewsWrapper = styled.div`
  padding: 1em;
  width: 100%;
`;

const NewsTitle = styled.div`
  & > img {
    height: 30px;
  }
`;
const NewsContentsWrapper = styled.div`
  display: flex;
`;

const Thumbnail = styled.div`
  position: relative;
  width: 30%;
  margin-right: 1em;

  & > img {
    height: 100%;
    width: 100%;
  }

  & > div {
    position: absolute;
    padding: 0.5em;
    bottom: 0;
    color: white;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const NewsItem = styled.li`
  padding: 0.2em 0;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

const EmptyNewsBox = styled.div`
  background: white;
  padding: 1em;
  height: 100px;
`;

export default ListView;
