import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  height: 65px;
  width: calc(1200px / 5);
  display: flex;
  justify-content: center;
  align-items: center;
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

export { Card, CardBtn };
