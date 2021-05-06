import React from 'react';
import styled, { css } from 'styled-components';

const Header = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 260px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
`;

const Card = styled.div`
  height: 65px;
  width: 16.42%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  background-color: #f7f9fa;
  border: 1px solid rgb(218, 225, 230);
  img {
    height: 20px;
  }
  button {
    display: inline-block;
    padding: 7px 8px 5px;
    background-color: #fff;
    border: 1px solid #dae1e6;
    font-size: 12px;
    line-height: 16px;
    color: #505050;
    vertical-align: top;
    text-decoration: none;
    cursor: pointer;
  }
  &:hover {
    img {
      display: none;
    }
    .popup_wrap {
      display: block;
    }
  }
`;

const CardBtn = styled.div`
  display: none;
`;

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

const NewsStandSortBtnWrap = styled.div`
  margin-left: 10px;
  a {
    margin-right: 10px;
    font-size: 14px;
    color: #505050;
  }
`;
const App = () => {
  return (
    <>
      <Header>
        <NewsStandSortBtnWrap>
          <a>구독한 언론사</a>
          <a>전체 언론사</a>
        </NewsStandSortBtnWrap>
        <NewsStandSortBtnWrap>
          <a>List</a>
          <a>Card</a>
          <a>left</a>
          <a>right</a>
        </NewsStandSortBtnWrap>
      </Header>
      <Main>
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
      </Main>
      <Main>
        <Card>
          <img
            alt="헤럴드경제"
            src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png"
            loading="lazy"
          />
          <CardBtn className="popup_wrap">
            <button>구독</button>
            <button>기사보기</button>
          </CardBtn>
        </Card>
        <Card>
          <img
            alt="헤럴드경제"
            src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png"
            loading="lazy"
          />
          <CardBtn className="popup_wrap">
            <button>구독</button>
            <button>기사보기</button>
          </CardBtn>
        </Card>{' '}
        <Card>
          <img
            alt="헤럴드경제"
            src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png"
            loading="lazy"
          />
          <CardBtn className="popup_wrap">
            <button>구독</button>
            <button>기사보기</button>
          </CardBtn>
        </Card>{' '}
        <Card>
          <img
            alt="헤럴드경제"
            src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png"
            loading="lazy"
          />
          <CardBtn className="popup_wrap">
            <button>구독</button>
            <button>기사보기</button>
          </CardBtn>
        </Card>{' '}
        <Card>
          <img
            alt="헤럴드경제"
            src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png"
            loading="lazy"
          />
          <CardBtn className="popup_wrap">
            <button>구독</button>
            <button>기사보기</button>
          </CardBtn>
        </Card>{' '}
        <Card>
          <img
            alt="헤럴드경제"
            src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png"
            loading="lazy"
          />
          <CardBtn className="popup_wrap">
            <button>구독</button>
            <button>기사보기</button>
          </CardBtn>
        </Card>{' '}
        <Card>
          <img
            alt="헤럴드경제"
            src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png"
            loading="lazy"
          />
          <CardBtn className="popup_wrap">
            <button>구독</button>
            <button>기사보기</button>
          </CardBtn>
        </Card>{' '}
        <Card>
          <img
            alt="헤럴드경제"
            src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png"
            loading="lazy"
          />
          <CardBtn className="popup_wrap">
            <button>구독</button>
            <button>기사보기</button>
          </CardBtn>
        </Card>{' '}
        <Card>
          <img
            alt="헤럴드경제"
            src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png"
            loading="lazy"
          />
          <CardBtn className="popup_wrap">
            <button>구독</button>
            <button>기사보기</button>
          </CardBtn>
        </Card>
      </Main>
    </>
  );
};

export default App;
