import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid greenyellow;
`;

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 260px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;

  border: 1px solid red;
`;

const Card = styled.div`
  height: 65px;
  width: 16.42%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`;

const NewsStands = styled.nav`
  height: 100%;
  width: 163px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid yellow;
`;

const NewsShowingView = styled.section`
  width: calc(100% - 163px);
  height: 100%;
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
  border: 1px solid sienna;
`;

const NewsList = styled.ul`
  width: calc(100% - 196px);
  height: 100%;

  border: 1px solid cornflowerblue;
`;

const NewsRow = styled.li`
  width: 305px;
  height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const App = () => {
  return (
    <>
      <Header>
        <div>
          <span>구독한 언론사</span>
          <span>전체 언론사</span>
        </div>
        <div>
          <span>List</span>
          <span>Card</span>

          <span> left </span>
          <span> right </span>
        </div>
      </Header>
      <Main>
        <NewsStands>
          <ul>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
          </ul>
        </NewsStands>
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
      </Main>
      <Main>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
        <Card>
          <div>
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </Card>
      </Main>
    </>
  );
};

export default App;
