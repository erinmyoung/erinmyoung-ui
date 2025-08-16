import Arrow from "../Arrow";
import type { ArrowProps } from "../Arrow";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ArrowExample = ({
  $orientation = "right",
  disabled = false,
  onClick = () => {},
}: ArrowProps) => {
  return (
    <StyledContainer>
      <Arrow
        $orientation={$orientation}
        disabled={disabled}
        onClick={onClick}
      />
    </StyledContainer>
  );
};

export default ArrowExample;
