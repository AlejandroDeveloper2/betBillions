import styled from "styled-components";

const Image = styled.img`
  transform: scale(0.5);
  @media (min-width: 768px) {
    transform: scale(1);
    object-fit: fill;
  }
`;

export { Image };
