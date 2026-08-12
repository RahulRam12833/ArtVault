import styled from 'styled-components';

export const SummaryContainer = styled.aside`
  position: sticky;
  top: 100px;

  padding: 30px;

  background: #fff;
  border: 1px solid var(--border);

  font-family: 'DM Sans', sans-serif;

  @media (max-width: 850px) {
    position: static;
  }
`;

export const SummaryTitle = styled.h2`
  margin: 0 0 30px;

  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 400;

  color: var(--text);
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  padding: 12px 0;

  font-size: 0.8rem;

  color: var(--muted);

  &:first-of-type {
    border-top: 1px solid var(--border);
  }
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  margin-top: 15px;
  padding-top: 20px;

  border-top: 1px solid var(--border);

  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;

  color: var(--text);
`;

export const PaymentButton = styled.button`
  width: 100%;

  margin-top: 30px;
  padding: 15px;

  border: 1px solid var(--text);

  background: var(--text);
  color: #fff;

  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.1em;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    background: transparent;
    color: var(--text);
  }
`;