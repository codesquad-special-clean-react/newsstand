import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedPressNews } from '../../atoms/myNewsState';

const NewsView = () => {
  const selectedNews = useRecoilValue(selectedPressNews)
  const { newslist } = selectedNews
  const newsTitleCallback = (item, index) => <div key={index}>{item}</div>
  const newsTitle = [...newslist].map(newsTitleCallback)
  console.log(newsTitle)
  return (
    <>
      {newsTitle}
    </>
  )
}

export default NewsView;