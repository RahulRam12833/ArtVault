import styled from 'styled-components';

export const CategoryContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto 120px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 70px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 18px;
    row-gap: 50px;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    row-gap: 45px;
  }
`;

export const CategoryTitle = styled.h1`
  width: 90%;
  max-width: 1400px;

  margin: 80px auto 60px;

  font-family: 'Playfair Display', serif;
  font-size: clamp(3.5rem, 8vw, 4rem);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.05em;

  text-transform: capitalize;
  color: var(--text);

  @media (max-width: 550px) {
    margin: 50px auto 40px;
  }
`;