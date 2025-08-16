import styled from "styled-components";

export type ListProps = {
  items: string[];
};

const BulletPoint = (accent: string, border: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="41" fill="none">
      <path fill="${accent}" d="M31.032 14.208h18.332v18.332H31.032z"/>
      <g stroke="${border}">
        <path d="M42.813.106V41"/>
        <path d="M55.013 23.874H0"/>
      </g>
    </svg>`,
  )}")`;

const StyledList = styled.ul`
  margin-left: 24px;
  margin-right: 0;
  display: block;
  position: relative;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 75%;
  }
`;

const StyledListItem = styled.li`
  list-style-image: ${({ theme }) =>
    BulletPoint(theme.colors.accent, theme.colors.border)};
`;

const List = ({ items }: ListProps) => {
  return (
    <StyledList data-testid="list">
      {items.map((item, index) => (
        <StyledListItem key={index}>{item}</StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;
