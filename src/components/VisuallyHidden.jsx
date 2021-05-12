import { Box } from "components";

const VisuallyHidden = (props) => (
  <Box
    width={1}
    height={1}
    whiteSpace="no-wrap"
    overflow="hidden"
    clip="rect(0 0 0 0)"
    clipPath="inset(50%)"
    position="absolute"
    {...props}
  />
);

export default VisuallyHidden;
