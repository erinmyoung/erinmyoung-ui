import { useState, useEffect } from "react";
import type { RefObject } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

type StyledButtonProps = {
  $right?: string;
  $bottom?: string;
};

export type ScrollProgressProps = {
  size?: number;
  $container?: RefObject<HTMLElement | null>;
} & StyledButtonProps;

const StyledProgressButton = styled.button<StyledButtonProps>`
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
  $right = "2rem",
  $bottom = "2rem",
  size = 80,
  $container,
  ...props
}: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll({
    container: $container || undefined,
  });

  const progressValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const strokeDasharray = useTransform(progressValue, [0, 1], [283, 0]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if ($container?.current) {
        // Container-based scrolling
        setIsDisabled($container.current.scrollTop === 0);
      } else {
        // Window-based scrolling
        setIsDisabled(window.scrollY === 0);
      }
    };

    // Initial check
    handleScroll();

    if ($container?.current) {
      // Add listener to container
      const scrollTarget = $container.current;
      scrollTarget.addEventListener("scroll", handleScroll);

      return () => {
        scrollTarget.removeEventListener("scroll", handleScroll);
      };
    } else {
      // Add listener to window
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [$container]);

  const scrollToTop = () => {
    if ($container?.current) {
      // Scroll container to top
      $container.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll window to top
      window.scrollTo({
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
      disabled={isDisabled}
      onClick={scrollToTop}
      data-testid="progress-button"
      aria-label="Click to scroll to the top"
      aria-disabled={isDisabled}
      aria-hidden={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      {...props}
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
