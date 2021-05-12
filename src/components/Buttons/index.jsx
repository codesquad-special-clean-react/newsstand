import { Box } from "components";
import styled from "styled-components";
import { variant } from "styled-system";

const BaseButton = styled(Box)(
  {
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
  },
  variant({
    scale: "buttons",
    variants: {
      primary: {
        backgroundColor: "naverGreen",
      },
      ghost: {
        "&:hover": {
          backgroundColor: "#eee",
        },
      },
      squared: {
        border: "1px ",
      },
    },
  })
);

const Button = (props) => (
  <BaseButton as="button" cursor="pointer" {...props} />
);

export default Button;
