import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  @media (min-width: 768px) {
    width: 30%;
    height: 100%;
    gap: 3.5rem;
    padding: 1rem 3rem;
  }
`;

export { SidebarContainer };
