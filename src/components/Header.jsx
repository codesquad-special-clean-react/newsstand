import React from 'react';
import styled, { css } from 'styled-components';
import { CgMenuGridR, CgMenu } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import { MENU, VIEW_MODE, MENU_RUL } from '@utils/constant';
import { menuState, viewModeState } from '@recoil/state';
import { useRecoilState } from 'recoil';

const Header = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const [viewMode, setViewMode] = useRecoilState(viewModeState);

  const onClickMenu = (menu) => () => setMenu(menu);
  const onClickViewMode = (viewMode) => () => setViewMode(viewMode);

  return (
    <HeaderWrapper>
      <LeftWrapper>
        <Title>{'뉴스스탠드 >'} </Title>
        <MenuGroup>
          <Menu $active={menu === MENU.ALL_NEWS} onClick={onClickMenu(MENU.ALL_NEWS)}>
            <Link to={MENU_RUL.ALL_NEWS}>{MENU.ALL_NEWS}</Link>
          </Menu>
          <ShortLine />
          <Menu $active={menu === MENU.MY_NEWS} onClick={onClickMenu(MENU.MY_NEWS)}>
            <Link to={MENU_RUL.MY_NEWS}>{MENU.MY_NEWS}</Link>
          </Menu>
        </MenuGroup>
      </LeftWrapper>
      <RightWrapper>
        <ViewModeGroup $visible={menu === MENU.MY_NEWS}>
          <Link to={`?viewMode=${VIEW_MODE.BLOCK}`}>
            <BoxMode
              $active={viewMode === VIEW_MODE.BLOCK}
              onClick={onClickViewMode(VIEW_MODE.BLOCK)}
            />
          </Link>
          <Link to={`?viewMode=${VIEW_MODE.LIST}`}>
            <ListMode
              $active={viewMode === VIEW_MODE.LIST}
              onClick={onClickViewMode(VIEW_MODE.LIST)}
            />
          </Link>
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

  ${({ $active }) =>
    $active &&
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
  visibility: hidden;
  align-self: center;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.1);

  & > * {
    margin-left: 1em;
    cursor: pointer;
  }

  & a {
    color: rgba(0, 0, 0, 0.5);
  }

  ${({ $visible }) =>
    $visible &&
    css`
      visibility: visible;
    `}
`;

const BoxMode = styled(CgMenuGridR)`
  ${({ $active }) =>
    $active &&
    css`
      color: black;
      font-weight: bold;
    `}
`;
const ListMode = styled(CgMenu)`
  ${({ $active }) =>
    $active &&
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
