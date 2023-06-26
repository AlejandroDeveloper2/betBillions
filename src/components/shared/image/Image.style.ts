import styled from "styled-components";

const Image = styled.img`
  transform: scale(1);
  @media (min-width: 768px) {
    transform: scale(1.5);
    object-fit: fill;
  }
`;

export { Image };
