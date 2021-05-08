import Box from './Box';

const Flex = ({ children, rest }) => (
  <Box {...rest} display="flex" flexDirection="row">
    {children}
  </Box>
);

export default Flex;
