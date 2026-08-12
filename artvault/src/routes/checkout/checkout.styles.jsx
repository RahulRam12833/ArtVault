import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  width: min(1200px, 90%);
  margin: 80px auto 120px;

  color: var(--text);
`;

export const CheckoutIntro = styled.header`
  margin-bottom: 60px;
`;

export const CheckoutTitle = styled.h1`
  margin: 0 0 15px;

  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.05em;

  color: var(--text);
`;

export const CheckoutSubtitle = styled.p`
  margin: 0;

  max-width: 500px;

  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;

  color: var(--muted);
`;

export const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.8fr) minmax(280px, 0.8fr);
  gap: 70px;

  align-items: start;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const CollectionSection = styled.section`
  width: 100%;
`;

export const CollectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding-bottom: 14px;
  margin-bottom: 0;

  border-bottom: 1px solid var(--border);

  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.1em;

  color: var(--muted);
`;

export const CollectionCount = styled.span`
  font-weight: 400;
`;