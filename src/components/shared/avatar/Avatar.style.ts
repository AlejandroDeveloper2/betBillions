import styled from "styled-components";

const AvatarContainer = styled.figure`
  width: 100%;
  background-color: var(--light-gray);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 2rem;
  @media (min-width: 768px) {
    width: 30rem;
  }
`;

const Caption = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem;
  justify-content: space-around;
  align-items: center;
  div:first-of-type {
    width: 4rem;
    height: 4rem;
    background-color: var(--white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--gray);
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--dark-gray);
    text-align: center;
  }
  @media (min-width: 768px) {
    justify-content: center;
    gap: 1rem;
    div:first-of-type {
      width: 6rem;
      height: 6rem;
    }
  }
`;

const UploadButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export { AvatarContainer, Caption, UploadButtonContainer };
