import Icon from "../Icon";
import type { IconProps } from "../Icon";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const IconExample = ({
  src = "./static/assets/github.png",
  alt = "Github icon",
  $selectevents = false,
  size = "small",
}: IconProps) => {
  return (
    <StyledContainer>
      <Icon src={src} alt={alt} $selectevents={$selectevents} size={size} />
    </StyledContainer>
  );
};

export default IconExample;
