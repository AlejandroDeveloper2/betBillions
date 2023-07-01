import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  display: none;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.2rem;
    font-weight: medium;
    text-align: center;
    vertical-align: center;
    color: var(--dark-gray);
  }
  @media (min-width: 768px) {
    display: inline-flex;
  }
`;

export { FooterContainer };
