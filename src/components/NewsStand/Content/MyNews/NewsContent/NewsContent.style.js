import styled from 'styled-components';

const NewsShowingViewWrapper = styled.li`
  box-sizing: border-box;
  width: 1050px;
  height: 100%;
  padding: 17px 24px;
  overflow: hidden;
  background-color: #f7f9fa;
  border: 1px solid #dae1e6;
  display: flex;
  flex-direction: column;
`;

const NewsPublisherTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

const UnSubscribeBtn = styled.button`
  background: none;
  border: none;
  line-height: 2;
  cursor: pointer;
`;

export { NewsShowingViewWrapper, NewsPublisherTitle, NewsShowingView, NewsThumb, NewsList, NewsRow, UnSubscribeBtn };
