import type { MouseEventHandler } from "react";
import styled from "styled-components";

export type ExitProps = {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledExit = styled.button<ExitProps>`
  font-family: "BungeeShade", sans-serif;
  width: 50px;
  height: 50px;
  position: relative;
  transition: all 400ms ease-in-out;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.border};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &::after {
    content: "\\00d7";
    font-size: 34px;
    line-height: 34px;
  }

  &:hover {
    box-shadow: ${(props) =>
      props.disabled
        ? "none"
        : ({ theme }) => `-0.4rem 0.4rem ${theme.colors.shadow}`};
  }
`;

const Exit = ({ disabled, onClick, ...props }: ExitProps) => {
  return (
    <StyledExit
      type="button"
      disabled={disabled}
      onClick={onClick}
      data-testid="exit"
      aria-disabled={disabled}
      aria-label="Click to exit modal"
      {...props}
    ></StyledExit>
  );
};

export default Exit;
