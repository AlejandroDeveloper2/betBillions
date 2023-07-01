import styled from "styled-components";

const PanelContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem 1rem;
  background-color: #eee;
  h1 {
    font-weight: bold;
    color: var(--bg-secondary-color);
    text-align: center;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      font-size: 1rem;
      color: var(--dark-gray);
      font-weight: normal;
      text-transform: uppercase;
      vertical-align: middle;
    }
  }

  @media (min-width: 768px) {
    h1 {
      span {
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 1000px) {
    width: 70%;
    align-items: start;
    h1 {
      display: inline-block;
      text-align: left;
      font-size: 2.5rem;
      span {
        font-size: 1.5rem;
      }
    }
  }
`;

export { PanelContainer };
