import styled, { css } from "styled-components";
import { ClickableMixin } from "../../../styles/mixins";

export const Navigation = styled.nav`
  padding: 1rem;
  border: 1px solid lightgray;
`;

export const NavItem = styled.li`
  ${({ isActive }) => css`
    ${ClickableMixin};
    margin-top: 1rem;
    &:first-child {
      margin-top: inherit;
    }
    color: ${isActive ? "green" : "inherit"};
  `}
`;
