import styled, { useTheme } from "styled-components";
import { useImageContrast } from "../../hooks/useImageContrast";

type IconSizeProps = {
  size?: "small" | "medium" | "large";
};

export type IconProps = {
  src: string;
  alt: string;
  $selectevents?: boolean;
} & IconSizeProps;

const StyledDiv = styled.div<IconSizeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 100%;
  width: calc(${({ size, theme }) => theme[size || "small"].icon} + 16px);
  height: calc(${({ size, theme }) => theme[size || "small"].icon} + 16px);
`;

const StyledIcon = styled.img<IconProps>`
  width: ${({ size, theme }) => theme[size || "small"].icon};
  height: ${({ size, theme }) => theme[size || "small"].icon};
  user-select: ${(props) => (props.$selectevents ? "auto" : "none")};
  pointer-events: ${(props) => (props.$selectevents ? "auto" : "none")};
`;

const Icon = ({ src, alt, $selectevents, size, ...props }: IconProps) => {
  const theme = useTheme();
  const { isAccessible } = useImageContrast({
    imageUrl: src,
    backgroundHex: theme.colors.background,
    threshold: 4.1,
    sampleStep: 1,
  });

  return (
    <>
      {!isAccessible ? (
        <StyledDiv size={size} data-testid="icon-background">
          <StyledIcon
            src={src}
            alt={alt}
            $selectevents={$selectevents}
            size={size}
            width={100}
            height={100}
            data-testid="icon"
            {...props}
          />
        </StyledDiv>
      ) : (
        <StyledIcon
          src={src}
          alt={alt}
          $selectevents={$selectevents}
          size={size}
          width={100}
          height={100}
          data-testid="icon"
          {...props}
        />
      )}
    </>
  );
};

export default Icon;
