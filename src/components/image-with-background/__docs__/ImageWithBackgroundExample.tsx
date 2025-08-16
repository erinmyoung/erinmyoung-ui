import ImageWithBackground from "../ImageWithBackground";
import type { ImageWithBackgroundProps } from "../ImageWithBackground";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ImageWithBackgroundExample = ({
  src = "./static/assets/erin.webp",
  alt = "Erin Young Image",
  size = "small",
}: ImageWithBackgroundProps) => {
  return (
    <StyledContainer>
      <ImageWithBackground src={src} alt={alt} size={size} />
    </StyledContainer>
  );
};

export default ImageWithBackgroundExample;
