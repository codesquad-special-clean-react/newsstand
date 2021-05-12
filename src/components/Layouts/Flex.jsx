import { Box } from 'components';

const Flex = ({ children, rest }) => (
  <Box {...rest} display="flex" flexDirection="row">
    {children}
  </Box>
);

export default Flex;
