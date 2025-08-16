import List from "../List";
import type { ListProps } from "../List";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const ListExample = ({
  items = ["First item", "Second item", "Third item"],
}: ListProps) => {
  return (
    <StyledContainer>
      <List items={items} />
    </StyledContainer>
  );
};

export default ListExample;
