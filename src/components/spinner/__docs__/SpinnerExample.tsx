import Spinner from "../Spinner";
import type { SpinnerProps } from "../Spinner";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SpinnerExample = ({ size = "small" }: SpinnerProps) => {
  return (
    <StyledContainer>
      <Spinner size={size} />
    </StyledContainer>
  );
};

export default SpinnerExample;
