import styled from 'styled-components';

const HeaderWrap = styled.header`
  height: 56px;
  max-width: 1220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewsStandSortBtnWrap = styled.div`
  margin-left: 10px;

  a {
    margin-right: 10px;
    font-size: 14px;
    color: #505050;
    cursor: pointer;
  }
`;

const RightControlBtnWrap = styled.div`
  display: flex;
  margin-right: 10px;
  font-size: 14px;
  color: #505050;

  button {
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    padding: 7px 8px 5px;
    background-color: #fff;
    border: 1px solid #dae1e6;
    font-size: 12px;
    line-height: 16px;
    color: #505050;
    vertical-align: top;
    text-decoration: none;
  }
`;

const MyNewsBtnWrap = styled.div`
  display: flex;
  margin-right: 10px;
`;

const DirectionBtnWrap = styled.div`
  display: flex;
`;

export { HeaderWrap, NewsStandSortBtnWrap, RightControlBtnWrap, MyNewsBtnWrap, DirectionBtnWrap };
