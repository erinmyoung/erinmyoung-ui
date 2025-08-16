import styled, { useTheme } from "styled-components";

interface SectionTitleBaseProps {
  size?: "small" | "medium" | "large";
}

interface SectionDivProps extends SectionTitleBaseProps {
  $fillBgColor?: boolean;
}

interface SectionHeadingProps extends SectionTitleBaseProps {
  text?: string;
}

export type SectionTitleProps = SectionDivProps & SectionHeadingProps;

const StyledSectionDiv = styled.div<SectionDivProps>`
  position: relative;
  margin-inline: 0;
  padding: ${({ size, theme }) => theme[size || "small"].containerPadding};
  background-color: ${(props) =>
    props.$fillBgColor ? props.theme.colors.accent : "transparent"};
`;

const StyledSectionTitle = styled.h1<SectionHeadingProps>`
  font-family: "BungeeShade", sans-serif;
  padding: ${({ size, theme }) => theme[size || "small"].titlePadding};
  width: fit-content;
  margin: 0;
  position: relative;
  z-index: 10;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ size, theme }) => theme[size || "small"].titleSize};

  @media (max-width: 480px) {
    word-break: break-word;
    font-size: ${({ size, theme }) => theme[size || "small"].titleSizeMobile};
  }
`;

const StyledSectionLines = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  pointer-events: none;
`;

const SectionTitleLines = (props: SectionTitleBaseProps) => {
  const theme = useTheme();
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 950 220"
      role="img"
      aria-label="SVG of graphic lines for title separator"
      data-testid="section-title-lines"
      style={{ width: "100%" }}
      width={theme[props.size || "small"].linesWidth}
      height={theme[props.size || "small"].linesHeight}
    >
      <title>Graphic lines for title separators</title>
      <path
        d="M0 0 C305.58 0 611.16 0 926 0 C926 1.65 926 3.3 926 5 C620.42 5 314.84 5 0 5 C0 3.35 0 1.7 0 0 Z "
        fill={theme.title.lines}
        transform="translate(68,202)"
      />
      <path
        d="M0 0 C1.32 0 2.64 0 4 0 C4 54.45 4 108.9 4 165 C237.31 165 470.62 165 711 165 C711 166.32 711 167.64 711 169 C477.69 169 244.38 169 4 169 C4 197.71 4 226.42 4 256 C2.68 256 1.36 256 0 256 C0 227.29 0 198.58 0 169 C-12.21 169 -24.42 169 -37 169 C-37 167.68 -37 166.36 -37 165 C-24.79 165 -12.58 165 0 165 C0 110.55 0 56.1 0 0 Z "
        fill={theme.title.lines}
        transform="translate(37,0)"
      />
    </svg>
  );
};

const SectionTitle = ({
  text,
  size,
  $fillBgColor,
  ...props
}: SectionTitleProps) => {
  return (
    <StyledSectionDiv
      size={size}
      $fillBgColor={$fillBgColor}
      data-testid="section-title-wrapper"
      {...props}
    >
      <StyledSectionTitle size={size} data-testid="section-title">
        {text}
      </StyledSectionTitle>
      <StyledSectionLines>
        <SectionTitleLines size={size} />
      </StyledSectionLines>
    </StyledSectionDiv>
  );
};

export default SectionTitle;
