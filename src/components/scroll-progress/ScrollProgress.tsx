import { useState, useEffect } from "react";
import type { RefObject } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

export type ScrollProgressProps = {
  $right?: string;
  $bottom?: string;
  size?: number;
  $container: RefObject<HTMLElement | null>;
};

const StyledProgressButton = styled.button<ScrollProgressProps>`
  position: fixed;
  right: ${(props) => props.$right || "2rem"};
  bottom: ${(props) => props.$bottom || "2rem"};
  z-index: 10;
  cursor: pointer;
  font-family: "BungeeShade", sans-serif;
  background: transparent;
  border: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
`;

const StyledSvgCircle = styled.circle`
  cx: 50;
  cy: 50;
  r: 45;
  stroke-width: 10;
  stroke: ${({ theme }) => theme.scroll.circle};
`;

const StyledSvgMotionCircle = styled(motion.circle)`
  cx: 50;
  cy: 50;
  r: 45;
  stroke-dasharray: 283;
  stroke-width: 10;
  stroke: ${({ theme }) => theme.scroll.motionCircle};
`;

const CenteredIcon = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Arrow = styled.div<{ size?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "\\2191";
    font-size: 40px;
    color: ${({ theme }) => theme.scroll.circle};
  }
`;

const ScrollProgress = ({
  $right,
  $bottom,
  size,
  $container,
}: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll({
    container: $container,
  });
  const progressValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const strokeDasharray = useTransform(progressValue, [0, 1], [283, 0]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if ($container?.current) {
        setIsDisabled($container.current.scrollTop === 0);
      }
    };

    handleScroll();

    const scrollTarget = $container?.current;
    if (scrollTarget) {
      scrollTarget.addEventListener("scroll", handleScroll);

      return () => {
        scrollTarget.removeEventListener("scroll", handleScroll);
      };
    }
  }, [$container]);

  const scrollToTop = () => {
    if ($container?.current) {
      $container.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <StyledProgressButton
      $right={$right}
      $bottom={$bottom}
      $container={$container}
      disabled={isDisabled}
      onClick={scrollToTop}
      data-testid="progress-button"
      aria-label="Click to scroll to the top"
      aria-disabled={isDisabled}
      aria-hidden={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledSvgCircle data-testid="circle" />
        <StyledSvgMotionCircle
          style={{ strokeDashoffset: strokeDasharray }}
          data-testid="motion-circle"
        />
      </motion.svg>
      <CenteredIcon>
        <Arrow size={size} />
      </CenteredIcon>
    </StyledProgressButton>
  );
};

export default ScrollProgress;
