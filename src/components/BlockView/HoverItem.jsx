import styled from 'styled-components';

const HoverItem = () => {
  return (
    <HoverItemWrapper>
      <button>구독</button>
      <button>기사보기</button>
    </HoverItemWrapper>
  );
};

const HoverItemWrapper = styled.div`
  border: 1px solid #e5e9ef;
  display: flex;
  height: 2em;

  & > button {
    border-left: 1px solid #e5e9ef;
    background: white;
  }
`;

export default HoverItem;
