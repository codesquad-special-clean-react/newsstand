import React from 'react';
import styled from 'styled-components';
import {
  border,
  color,
  position,
  flexbox,
  grid,
  layout,
  shadow,
  system,
  compose,
  space,
  display,
} from 'styled-system';
import css from '@styled-system/css';

const whiteSpace = system({ whiteSpace: { property: 'whiteSpace' } });

const common = compose(
  space,
  color,
  display,
  border,
  flexbox,
  grid,
  position,
  layout,
  shadow,
  whiteSpace
);

const sx = (props) => css(props.sx);

const BoxBase = styled('div')(
  { boxSizing: 'border-box', minWidth: 0 },
  common,
  sx
);

const Box = React.forwardRef((props, ref) => (
  <BoxBase as="div" ref={ref} {...props} />
));

export default Box;
