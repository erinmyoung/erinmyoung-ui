import Exit from "../Exit";
import type { ExitProps } from "../Exit";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ExitExample = ({ disabled = false, onClick = () => {} }: ExitProps) => {
  return (
    <StyledContainer>
      <Exit disabled={disabled} onClick={onClick} />
    </StyledContainer>
  );
};

export default ExitExample;
