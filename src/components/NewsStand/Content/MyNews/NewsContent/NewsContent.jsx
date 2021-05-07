import React, { useContext, useEffect } from 'react';
import {
  NewsList,
  NewsPublisherTitle,
  NewsRow,
  NewsShowingView,
  NewsShowingViewWrapper,
  NewsThumb,
} from './NewsContent.style';
import { myTargetNewsSelector } from '@recoil/news';
import { useRecoilValue } from 'recoil';
import { HistoryContext } from '@router';

const NewsContent = () => {
  const { setCurrentPath } = useContext(HistoryContext);
  const newsInfo = useRecoilValue(myTargetNewsSelector);

  useEffect(() => {
    if (newsInfo.length === 0) {
      const state = {
        to: '/newscompany',
      };
      window.history.pushState(state, '', state.to);
      setCurrentPath(state.to);
    }
  }, [newsInfo]);

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
