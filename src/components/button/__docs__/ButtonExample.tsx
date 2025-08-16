import Button from "../Button";
import type { ButtonProps } from "../Button";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ButtonExample = ({
  text = "Button",
  label = "Click to do something",
  size = "small",
  disabled = false,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <StyledContainer>
      <Button
        text={text}
        size={size}
        disabled={disabled}
        onClick={onClick}
        aria-label={label}
      />
    </StyledContainer>
  );
};

export default ButtonExample;
