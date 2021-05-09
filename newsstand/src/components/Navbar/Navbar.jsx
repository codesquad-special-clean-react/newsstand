import React from "react";
import { Link } from "react-router-dom";
import { NAV_NAME, ROUTE } from "../../utils/constants"
import styled from 'styled-components';

const TITLE = "뉴스스탠드"

const leftButton = "<"

const rightButton = ">"

const Navbar = (props) => {
  return (
    <NavbarWrapper>
      <NavbarItems>
        <div>{TITLE + " > "}</div>
        <div>
          <Link to={ROUTE.HOME}>{NAV_NAME.ENTRY_PRESS}</Link>
        </div>
        <div>
          <Link to={ROUTE.MY_NEWS}>{NAV_NAME.MY_NEWS}</Link>
        </div>
      </NavbarItems>
      <NavbarItems>
        <div>
          Card
        </div>
        <div>
          List
        </div>
      </NavbarItems>
      <NavbarItems>
        <div>
          {leftButton}
        </div>
        <div>
          {rightButton}
        </div>
      </NavbarItems>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dbdee2;
  justify-content: space-between;
  font-size: 14px;
  line-height: 18px;
  height: 56px;
`

const NavbarItems = styled.div`
  display: flex;
`

export default Navbar;