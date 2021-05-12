import React from 'react';
import {
  NewsList,
  NewsPublisherTitle,
  NewsRow,
  NewsShowingView,
  NewsShowingViewWrapper,
  NewsThumb,
} from './NewsContent.style';
import { myTargetNewsSelector } from '@recoilStore/news';
import { useRecoilValue } from 'recoil';

const NewsContent = () => {
  const newsInfo = useRecoilValue(myTargetNewsSelector);

  if (newsInfo.length === 0) return null;

  const {
    company,
    thumbnews: { imageUrl, text },
    newslist,
  } = newsInfo[0];

  const NewsTitles = newslist.map((title, idx) => <NewsRow key={idx}>{title}</NewsRow>);

  return (
    <NewsShowingViewWrapper>
      <NewsPublisherTitle>
        <span>{company}</span>
      </NewsPublisherTitle>
      <NewsShowingView>
        <NewsThumb>
          <img src={imageUrl} alt={text} />
          <div>{text}</div>
        </NewsThumb>
        <NewsList>{NewsTitles}</NewsList>
      </NewsShowingView>
    </NewsShowingViewWrapper>
  );
};

export default NewsContent;
