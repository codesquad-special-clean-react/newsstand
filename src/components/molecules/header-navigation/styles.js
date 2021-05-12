import styled, { css } from "styled-components";
import { ClickableMixin } from "../../../styles/mixins";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const LayoutSelector = styled.div`
  display: flex;
  margin-right: 5rem;
`;

export const Layout = styled.div`
  ${({ isActive }) => css`
    ${ClickableMixin};
    &:first-child {
      margin-right: 1rem;
    }
    color: ${isActive ? "inherit" : "gray"};
  `}
`;
export const Menu = styled.span`
  ${({ isActive }) => css`
    ${ClickableMixin};
    margin-left: 1rem;
    color: ${isActive ? "inherit" : "gray"};
  `}
`;
