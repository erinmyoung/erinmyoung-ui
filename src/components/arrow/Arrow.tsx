import type { MouseEventHandler } from "react";
import styled from "styled-components";

export type ArrowProps = {
  $orientation?: "left" | "right";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledArrow = styled.button<ArrowProps>`
  --orientation-left: "\\2190";
  --orientation-right: "\\2192";

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
    content: ${(props) =>
      props.$orientation === "left"
        ? "var(--orientation-left)"
        : "var(--orientation-right)"};
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

const Arrow = ({ $orientation, disabled, onClick, ...props }: ArrowProps) => {
  return (
    <StyledArrow
      type="button"
      $orientation={$orientation}
      disabled={disabled}
      onClick={onClick}
      data-testid="arrow"
      aria-label={`Click to move ${$orientation}`}
      aria-disabled={disabled}
      {...props}
    ></StyledArrow>
  );
};

export default Arrow;
