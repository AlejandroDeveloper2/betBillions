import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: var(--bg-primary-color);
  text-align: center;
  font-style: italic;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Figure = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export { Title, Figure };
