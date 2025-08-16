import styled, { keyframes } from "styled-components";

export type SpinnerProps = {
  size?: "small" | "medium" | "large";
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  border-radius: 100%;
  height: ${({ size, theme }) => theme[size || "small"].spinner};
  width: ${({ size, theme }) => theme[size || "small"].spinner};
  animation: ${spin} 1s linear infinite;
  border-bottom: 4px solid ${({ theme }) => theme.colors.border};
`;

const Spinner = ({ size, ...props }: SpinnerProps) => {
  return (
    <StyledDiv {...props}>
      <StyledSpinner size={size} data-testid="spinner" />
    </StyledDiv>
  );
};

export default Spinner;
