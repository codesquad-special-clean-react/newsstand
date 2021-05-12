import { css } from "styled-components";

export const ClickableMixin = css`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
