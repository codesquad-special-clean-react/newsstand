import { useState } from 'react';
import styled, { css } from 'styled-components';

import HoverItem from '@blockView/HoverItem';

const BlockItem = ({ news }) => {
  const [itemHover, setItemHover] = useState(false);

  const onHover = () => setItemHover(true);
  const onLeave = () => setItemHover(false);

  const ItemView = (
    <div>{itemHover ? <HoverItem /> : <img src={news.logoImgUrl} alt={news.company} />}</div>
  );

  return (
    <BlockItemWrapper onMouseEnter={onHover} onMouseLeave={onLeave} hover={itemHover}>
      {ItemView}
    </BlockItemWrapper>
  );
};

const BlockItemWrapper = styled.div`
  border: 1px solid #e5e9ef;

  & > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${(props) =>
    props.hover &&
    css`
      background: #fdfdfd;
    `}
`;

export default BlockItem;