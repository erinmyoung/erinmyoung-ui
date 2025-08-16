import SectionTitle from "../SectionTitle";
import type { SectionTitleProps } from "../SectionTitle";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionTitleExample = ({
  text = "Section Title",
  size = "small",
  $fillBgColor = true,
}: SectionTitleProps) => {
  return (
    <StyledContainer>
      <SectionTitle text={text} size={size} $fillBgColor={$fillBgColor} />
    </StyledContainer>
  );
};

export default SectionTitleExample;
