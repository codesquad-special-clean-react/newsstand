import React from 'react';
import {
  NewsList,
  NewsPublisher,
  NewsPublisherTitle,
  NewsRow,
  NewsShowingView,
  NewsShowingViewWrapper,
  NewsStand,
  NewsStandWrapper,
  NewsThumb,
} from './MyNews.style';

const MyNews = () => {
  return (
    <>
      <NewsStandWrapper>
        <NewsStand>
          <NewsPublisher isSubscribed={true}>A</NewsPublisher>
          <NewsPublisher>A</NewsPublisher>
          <NewsPublisher>A</NewsPublisher>
          <NewsPublisher>A</NewsPublisher>
          <NewsPublisher>A</NewsPublisher>
          <NewsPublisher>A</NewsPublisher>
          <NewsPublisher>A</NewsPublisher>
        </NewsStand>
      </NewsStandWrapper>
      <NewsShowingViewWrapper>
        <NewsPublisherTitle>
          <span>월간 중앙</span>
        </NewsPublisherTitle>
        <NewsShowingView>
          <NewsThumb>
            <img />
            <div>뉴스내용</div>
          </NewsThumb>
          <NewsList>
            <NewsRow>Aㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</NewsRow>
            <NewsRow>A</NewsRow>
            <NewsRow>A</NewsRow>
            <NewsRow>A</NewsRow>
            <NewsRow>A</NewsRow>
            <NewsRow>A</NewsRow>
            <NewsRow>A</NewsRow>
          </NewsList>
        </NewsShowingView>
      </NewsShowingViewWrapper>
    </>
  );
};

export default MyNews;
