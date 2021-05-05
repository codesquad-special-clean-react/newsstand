import React from 'react';
import styled, { css } from 'styled-components';
import { CgMenuGridR, CgMenu } from 'react-icons/cg';

const Header = () => {
  return (
    <HeaderWrapper>
      <LeftWrapper>
        <Title>{'뉴스스탠드 >'} </Title>
        <MenuGroup>
          <Menu active>전체 언론사</Menu> <ShortLine /> <Menu>MY 뉴스</Menu>
        </MenuGroup>
      </LeftWrapper>
      <RightWrapper>
        <ViewModeGroup>
          <BoxMode active={'true'} />
          <ListMode />
        </ViewModeGroup>
        <LeftRightButtonGroup>
          <Button>{'<'}</Button>
          <Button>{'>'}</Button>
        </LeftRightButtonGroup>
      </RightWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  border: 1px solid #e5e9ef;
  background: white;
  display: flex;
  justify-content: space-between;

  color: rgba(0, 0, 0, 0.5);
`;

// LEFT
const LeftWrapper = styled.div`
  display: flex;
  padding: 1em;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: black;
`;

const MenuGroup = styled.nav`
  display: flex;
  font-size: 1.5em;
  & > * {
    margin-left: 1em;
  }
`;

const Menu = styled.span`
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      color: black;
      font-weight: bold;
    `}
`;

const ShortLine = styled.div`
  border-left: 3px solid #e5e9ef;
`;

// RIGHT
const RightWrapper = styled.div`
  display: flex;
`;

const ViewModeGroup = styled.div`
  align-self: center;
  font-size: 2em;

  & > * {
    margin-left: 1em;
    cursor: pointer;
  }
`;

const BoxMode = styled(CgMenuGridR)`
  ${(props) =>
    props.active &&
    css`
      color: black;
      font-weight: bold;
    `}
`;
const ListMode = styled(CgMenu)`
  ${(props) =>
    props.active &&
    css`
      color: black;
      font-weight: bold;
    `}
`;

const LeftRightButtonGroup = styled.div`
  margin-left: 5em;
`;

const Button = styled.button`
  border-left: 1px solid #e5e9ef;
  height: 100%;
  width: 3em;
  font-size: 1.3em;
`;

export default Header;
