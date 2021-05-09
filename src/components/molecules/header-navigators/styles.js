import styled from "styled-components";
import { ClickableMixin } from "../../../styles/mixins";
import { FlexDiv } from "../../organisms/header/styles";

export const Navigators = styled(FlexDiv)`
  margin: inherit;
`;

export const Navigator = styled.div`
  ${ClickableMixin};
  padding: 1rem;
  border: 1px solid lightgray;
`;
