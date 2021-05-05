import styled from 'styled-components';

const BlockItem = ({ news }) => {
  return (
    <BlockItemWrapper>
      <div>
        <img src={news.logoImgUrl} alt={news.company} />
      </div>
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
`;

export default BlockItem;
