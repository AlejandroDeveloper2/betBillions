import styled from "styled-components";

import { DesktopBg } from "../../../assets";

const LoadingScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${DesktopBg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingBox = styled.div`
  width: 20rem;
  height: auto;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: medium;
    color: var(--white);
  }
  padding: 5rem 0;
`;

export { LoadingScreenContainer, LoadingBox };
