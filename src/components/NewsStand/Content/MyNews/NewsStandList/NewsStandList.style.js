import styled from 'styled-components';

const NewsStandNav = styled.nav`
  height: 100%;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f7f9fa;
  border: 1px solid #dae1e6;
  overflow: hidden;
`;
const NewsStandListWrap = styled.ul`
  width: 100%;
  height: 100%;
  padding: 7px 5px 3px;
  overflow-y: scroll;
`;

export { NewsStandNav, NewsStandListWrap };
