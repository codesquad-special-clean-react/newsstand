import React from 'react';
import {
  NewsList,
  NewsPublisherTitle,
  NewsRow,
  NewsShowingView,
  NewsShowingViewWrapper,
  NewsThumb,
  UnSubscribeBtn,
} from './NewsContent.style';
import { myTargetNewsSelector } from '@recoilStore/news';
import { useRecoilValue } from 'recoil';
import { useSubscribe } from '@hooks';

const NewsContent = () => {
  const newsInfo = useRecoilValue(myTargetNewsSelector);
  const { onUnSubscribe } = useSubscribe();

  if (newsInfo.length === 0) return null;

  const {
    id,
    company,
    thumbnews: { imageUrl, text },
    newslist,
  } = newsInfo[0];

  const handleUnSubscribe = ({
    target: {
      dataset: { id },
    },
  }) => onUnSubscribe(id);

  const NewsTitles = newslist.map((title, idx) => <NewsRow key={idx}>{title}</NewsRow>);

  return (
    <NewsShowingViewWrapper>
      <NewsPublisherTitle>
        <span>{company}</span>
        <UnSubscribeBtn data-id={id} onClick={handleUnSubscribe}>
          X
        </UnSubscribeBtn>
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
