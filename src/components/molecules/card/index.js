import styled from "styled-components";
import { useState } from "react";
import { patchNews } from "../../../apis/news";
import { useRecoilState } from "recoil";
import { newsListState } from "../../../recoils/atoms";

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  padding: 1rem;
  width: 8rem;
`;

const Card = ({ news }) => {
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [newsList, setNewsList] = useRecoilState(newsListState);

  const handleMouseInOut = (isIn) => () => {
    setIsMouseIn(isIn);
  };

  const handleClick = (isSub) => async () => {
    try {
      const response = await patchNews({
        newsId: news.id,
        params: { isSubscription: isSub },
      });
      if (!response.ok) {
        alert(response.statusText);
      } else {
        const responseData = await response.json();
        const targetIndex = newsList.indexOf(news);
        setNewsList([
          ...newsList.slice(0, targetIndex),
          responseData,
          ...newsList.slice(targetIndex + 1, newsList.length),
        ]);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <StyledCard
      onMouseEnter={handleMouseInOut(true)}
      onMouseLeave={handleMouseInOut(false)}
    >
      {isMouseIn ? (
        <div>
          {news.isSubscription ? (
            <button onClick={handleClick(false)}>해지</button>
          ) : (
            <button onClick={handleClick(true)}>구독</button>
          )}
        </div>
      ) : (
        <img src={news.logoImgUrl} alt={news} />
      )}
    </StyledCard>
  );
};

export default Card;
