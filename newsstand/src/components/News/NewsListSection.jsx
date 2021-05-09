import React from 'react';
import { useRecoilValue } from 'recoil';
import { myNewsListIndex, mySubscribeNews } from '../../atoms/myNewsState';
import NewsList from './NewsList'
import NewsView from './NewsView'

const NewsListSection = () => {
  const newsIndex = useRecoilValue(myNewsListIndex)
  const news = useRecoilValue(mySubscribeNews)

  return (
    <>
      <NewsList />
      <NewsView />
    </>
  )
}

export default NewsListSection;