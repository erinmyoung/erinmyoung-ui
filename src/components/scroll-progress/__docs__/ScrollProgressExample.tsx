import { useRef } from "react";
import ScrollProgress from "../ScrollProgress";
import type { ScrollProgressProps } from "../ScrollProgress";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 480px) {
    height: 100vh;
  }
`;

const StyledContentContainer = styled.div`
  padding: 1rem 6rem 1rem 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ScrollProgressExample = ({
  $right = "2rem",
  $bottom = "2rem",
  size = 80,
}: ScrollProgressProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <StyledContainer>
      <div
        ref={containerRef}
        style={{
          height: "100%",
          overflowY: "auto",
          position: "relative",
        }}
        tabIndex={0}
      >
        <StyledContentContainer>
          <h2>Scrollable Container Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            felis nisi, iaculis eu arcu ut, malesuada efficitur diam. Vestibulum
            tristique nisl sit amet neque pellentesque molestie. Suspendisse sit
            amet dui eget tortor faucibus pharetra sit amet non nisl.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Quisque porta tempor augue ac porta. Donec
            rhoncus, metus ac aliquam euismod, ex arcu pharetra lectus, faucibus
            laoreet velit erat a ante. Quisque molestie odio massa, nec faucibus
            ligula eleifend quis. Praesent eget ex nibh. Ut ac dictum turpis,
            vitae volutpat enim. Sed metus mauris, ullamcorper lobortis neque
            nec, aliquam ullamcorper tellus. Sed elementum est et neque accumsan
            eleifend. Etiam sagittis fringilla purus. Vivamus tristique
            pellentesque leo, vestibulum fermentum nibh porttitor ac.
          </p>
          <p>
            Proin porttitor sapien ut rhoncus ultrices. Fusce elit mauris,
            pharetra vel ornare porttitor, malesuada sed risus. Vestibulum eu
            enim nec velit consectetur dapibus. Nam quis est bibendum, aliquet
            orci ullamcorper, tincidunt metus. In luctus rhoncus ante, sed
            rutrum orci egestas sit amet. Nunc tempus, quam quis venenatis
            luctus, nulla arcu sollicitudin enim, quis interdum ligula orci eu
            odio. Suspendisse potenti. Proin vestibulum laoreet nulla, auctor
            lacinia urna malesuada vitae. Suspendisse a erat ante. Proin at
            magna id lectus interdum sollicitudin lobortis at sem.
          </p>
          <p>
            Nulla ut ipsum sollicitudin, lacinia risus id, euismod turpis.
            Curabitur libero enim, gravida in mauris at, ornare iaculis risus.
            Nam ac augue non elit convallis pulvinar. Aliquam erat volutpat.
            Aliquam a enim a dolor suscipit scelerisque. Pellentesque suscipit
            tincidunt accumsan. Curabitur aliquet neque nec nisi mollis
            ultricies. Praesent aliquet libero nec luctus pretium. Cras
            imperdiet dictum velit, at varius odio varius nec.
          </p>
          <p>
            Mauris rutrum elit pretium, vulputate ligula vitae, hendrerit nulla.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nullam odio odio, aliquet at est a, efficitur
            tristique eros. Nam finibus interdum velit in viverra. Sed sit amet
            tristique urna, in suscipit massa. Nunc at elit quam. Donec bibendum
            dui eget nibh porttitor, eget lacinia lorem facilisis. Aenean at
            ante aliquet, lacinia massa a, imperdiet libero. Sed eu est quam.
          </p>
          <p>
            Phasellus maximus urna a lorem scelerisque eleifend. Fusce eu rutrum
            sapien, ac posuere lacus. Phasellus posuere felis ligula, a porta
            lacus hendrerit in. Aenean placerat accumsan gravida. Phasellus
            tincidunt ornare urna, sed lacinia leo elementum et. Vestibulum
            euismod, arcu et interdum faucibus, leo lectus efficitur diam, sit
            amet suscipit diam purus euismod nunc. Sed et sapien velit. Etiam
            lorem diam, congue at iaculis eu, suscipit at augue. Nulla ornare
            neque volutpat ipsum porta malesuada.
          </p>
        </StyledContentContainer>
        <ScrollProgress
          $right={$right}
          $bottom={$bottom}
          size={size}
          $container={containerRef}
        />
      </div>
    </StyledContainer>
  );
};

export default ScrollProgressExample;
