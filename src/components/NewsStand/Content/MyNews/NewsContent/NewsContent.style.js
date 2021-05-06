import styled from 'styled-components';

const NewsShowingViewWrapper = styled.section`
  width: calc(100% - 163px);
  height: 100%;
  padding: 17px 24px;
  overflow: hidden;
  background-color: #f7f9fa;
  border: 1px solid #dae1e6;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const NewsRow = styled.li`
  width: 305px;
  height: 30px;
  overflow-x: clip;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export { NewsShowingViewWrapper, NewsPublisherTitle, NewsShowingView, NewsThumb, NewsList, NewsRow };
