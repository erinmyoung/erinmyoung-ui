import type { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
  text?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  margin-top: 8px;
  font-family: "BungeeShade", sans-serif;
  padding: 16px 32px;
  transition: all 400ms ease-in-out;
  position: relative;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.border};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: fit-content;
  font-size: ${({ size, theme }) => theme[size || "small"].button};

  &:hover {
    box-shadow: ${(props) =>
      props.disabled
        ? "none"
        : ({ theme }) => `-0.4rem 0.4rem ${theme.colors.shadow}`};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Button = ({
  text,
  label,
  size,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      size={size}
      disabled={disabled}
      onClick={onClick}
      data-testid="button"
      aria-disabled={disabled}
      aria-label={label}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
