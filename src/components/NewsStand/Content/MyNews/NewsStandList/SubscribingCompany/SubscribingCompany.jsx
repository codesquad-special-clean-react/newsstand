import React from 'react';
import styled, { css } from 'styled-components';

const SubscribingCompany = ({ id, company, myTargetNews, setMyTargetNews }) => {
  const isContentNewsCompany = id === myTargetNews;
  const changeCurrentNews = ({ target: { id } }) => setMyTargetNews(id);
  return (
    <NewsPublisher id={id} isContentNewsCompany={isContentNewsCompany} onClick={changeCurrentNews}>
      {company}
    </NewsPublisher>
  );
};

export default SubscribingCompany;

const NewsPublisher = styled.li`
  box-sizing: border-box;
  text-align: center;
  width: 135px;
  height: 14px;
  padding: 0 14px 0 18px;
  margin: 12px 0;
  cursor: pointer;

  ${({ isContentNewsCompany }) =>
    isContentNewsCompany &&
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
