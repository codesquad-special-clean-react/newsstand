import styled from "styled-components";
import { ClickableMixin } from "../../../styles/mixins";

export const Navigators = styled.div`
  display: flex;
  margin: inherit;
`;

export const Navigator = styled.div`
  ${ClickableMixin};
  padding: 1rem;
  border: 1px solid lightgray;
`;
