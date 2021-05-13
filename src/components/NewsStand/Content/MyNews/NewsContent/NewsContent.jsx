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
import { useSubscribe } from '@hooks';
import { myTargetNewsSelector, mySubscribeNewsCompanyListSelector } from '@recoilStore/news';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const NewsContent = ({ id, company, thumbnews, newslist }) => {
  const { onUnSubscribe } = useSubscribe();
  const setMyTargetNews = useSetRecoilState(myTargetNewsSelector);
  const companyNameList = useRecoilValue(mySubscribeNewsCompanyListSelector);

  const handleUnSubscribe = ({
    target: {
      dataset: { id },
    },
  }) => {
    onUnSubscribe(id);
    setMyTargetNews(companyNameList[0]?.id);
  };

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
          <img src={thumbnews.imageUrl} alt={thumbnews.text} />
          <div>{thumbnews.text}</div>
        </NewsThumb>
        <NewsList>{NewsTitles}</NewsList>
      </NewsShowingView>
    </NewsShowingViewWrapper>
  );
};

export default NewsContent;
