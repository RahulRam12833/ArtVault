import styled from 'styled-components';

export const AuthenticationContainer = styled.main`
  width: 90%;
  max-width: 1100px;

  margin: 100px auto 140px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 70px;

    margin: 70px auto 100px;
  }
`;