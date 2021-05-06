import styled, { css } from 'styled-components';

const NewsStandWrapper = styled.nav`
  height: 100%;
  width: 163px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f7f9fa;
  border: 1px solid #dae1e6;
  overflow: hidden;
`;
const NewsStand = styled.ul`
  width: 100%;
  height: 100%;
  padding: 7px 14px 3px;
  overflow-y: scroll;
`;

const NewsPublisher = styled.li`
  box-sizing: border-box;
  text-align: center;
  width: 135px;
  height: 14px;
  padding: 0 14px 0 18px;
  margin: 12px 0;

  ${(props) =>
    props.isSubscribed &&
    css`
      height: 34px;
      line-height: 34px;
      margin: 8px 0 13px;
      background-color: #4063bd;
      border-radius: 17px;
      color: #fff;
      font-weight: 700;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 16%);
    `}
  &:hover {
    text-decoration: underline;
  }
`;

const NewsShowingViewWrapper = styled.section`
  width: calc(100% - 163px);
  height: 100%;
  padding: 17px 24px;
  overflow: hidden;
`;

const NewsPublisherTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 20px;
`;

const NewsShowingView = styled.section`
  width: 100%;
  height: calc(100% - 20px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid red;
`;

const NewsThumb = styled.section`
  width: 196px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NewsList = styled.ul`
  width: calc(100% - 196px);
  height: 100%;
`;

const NewsRow = styled.li`
  width: 305px;
  height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export {
  NewsStandWrapper,
  NewsStand,
  NewsPublisher,
  NewsShowingViewWrapper,
  NewsPublisherTitle,
  NewsShowingView,
  NewsThumb,
  NewsList,
  NewsRow,
};
