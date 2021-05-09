import styled from "styled-components";
import { ClickableMixin } from "../../../styles/mixins";

export const FlexDiv = styled.div`
  display: flex;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 1.3rem;
  padding: 1rem;
  border: 1px solid lightgray;
`;

export const Breadcrumb = styled.div``;

export const Title = styled(FlexDiv)`
  justify-content: space-around;
  flex: 1;
`;

export const LayoutSelector = styled(FlexDiv)``;

export const Navigators = styled(FlexDiv)`
  margin: inherit;
`;

export const Navigator = styled.div`
  ${ClickableMixin};
  padding: 1rem;
  border: 1px solid lightgray;
`;

export const Layout = styled.div`
  ${ClickableMixin};
  &:first-child {
    margin-right: 1rem;
  }
`;

export const Divider = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const Menu = styled.span`
  ${ClickableMixin};
`;
