import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { myNewsListIndex, mySubscribeNews } from '../../atoms/myNewsState';

const NewsList = () => {
  const [newsIndex, setNewsIndex] = useRecoilState(myNewsListIndex)
  const news = useRecoilValue(mySubscribeNews)

  const onPressClick = ({ target }) => {
    const index = Number(target.dataset.newsIndex)
    setNewsIndex(index)
  }

  const newsItem = (item, index) => <div key={index} data-news-index={index} onClick={onPressClick}>{item.company}</div>
  const newsListArticle = [...news].map(newsItem)
  return (
    <>
      {newsListArticle}
    </>
  )
}

export default NewsList;