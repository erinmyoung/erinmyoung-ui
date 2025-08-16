import styled, { useTheme } from "styled-components";

type ImageWithBackgroundBaseProps = {
  size?: "small" | "medium" | "large";
};

export type ImageWithBackgroundProps = {
  src: string;
  alt: string;
} & ImageWithBackgroundBaseProps;

const StyledDiv = styled.div`
  display: block;
  position: relative;
  width: fit-content;
  margin-inline: auto;
  margin-bottom: auto;
  top: 0;
  z-index: 10;
  overflow: hidden;
  max-width: 100%;
`;

const StyledImage = styled.img<ImageWithBackgroundProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  width: calc(
    ${({ size, theme }) => theme[size || "small"].backgroundWidth}px * 0.8
  );
  height: calc(
    ${({ size, theme }) => theme[size || "small"].backgroundWidth}px * 0.8
  );
  border-radius: 100%;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const StyledBackgroundDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -1;
`;

const Background = (props: ImageWithBackgroundBaseProps) => {
  const theme = useTheme();
  return (
    <svg
      width={theme[props.size || "small"].backgroundWidth}
      height={theme[props.size || "small"].backgroundHeight}
      viewBox="0 0 400 413"
      role="img"
      aria-label="SVG of graphic lines to sit behind image"
      data-testid="background-lines"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        data-testid="background-lines-rect"
        x="206"
        y="41"
        width="175"
        height="163"
        fill={theme.background.rectLarge}
      />
      <rect
        x="138"
        y="222"
        width="54"
        height="177"
        fill={theme.background.rectSmall}
      />
      <line
        y1="204.5"
        x2="400.003"
        y2="204.5"
        stroke={theme.background.lines}
      />
      <line
        x1="20"
        y1="221.5"
        x2="380"
        y2="221.5"
        stroke={theme.background.lines}
      />
      <line
        x1="192.5"
        x2="192.5"
        y2="413.001"
        stroke={theme.background.lines}
      />
      <line
        x1="206.5"
        y1="13"
        x2="206.5"
        y2="400"
        stroke={theme.background.lines}
      />
      <line
        x1="138.5"
        y1="13"
        x2="138.5"
        y2="400"
        stroke={theme.background.lines}
      />
      <circle cx="338" cy="353" r="20" fill={theme.background.circlePrimary} />
      <circle
        cx="88.5"
        cy="74.5"
        r="35.5"
        fill={theme.background.circleSecondary}
      />
      <circle
        cx="18.5"
        cy="251.5"
        r="18.5"
        fill={theme.background.circleTertiary}
      />
      <circle cx="318" cy="312" r="10" fill={theme.background.circlePrimary} />
    </svg>
  );
};

const ImageWithBackground = ({
  src,
  alt,
  size,
  ...props
}: ImageWithBackgroundProps) => {
  return (
    <StyledDiv data-testid="image-background-wrapper" {...props}>
      <StyledImage
        src={src}
        alt={alt}
        size={size}
        data-testid="foreground-image"
        loading="eager"
      />
      <StyledBackgroundDiv>
        <Background data-testid="background-image" size={size} />
      </StyledBackgroundDiv>
    </StyledDiv>
  );
};

export default ImageWithBackground;
