import styled from "styled-components";

const InfoBar = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: var(--light-gray);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  overflow-wrap: anywhere;
  span {
    width: 100%;
    color: var(--dark-gray);
    font-weight: 600;
    text-align: left;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      fill: var(--dark-gray);
    }
  }
  p {
    font-size: 1rem;
    font-weight: 500;
    color: var(--bg-secondary-color);
    text-align: justify;
  }
`;

export { InfoBar };
