import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CTAContainer = styled.section`
  padding: 140px 7%;
  text-align: center;

  border-top: 1px solid var(--border);
  background: var(--surface);
`;

export const CTATitle = styled.h2`
  margin: 0;

  font-family: 'Playfair Display', serif;
  font-size: clamp(3.5rem, 7vw, 7rem);
  font-weight: 500;
  line-height: 0.9;
  letter-spacing: -0.05em;

  color: var(--text);
`;

export const CTADescription = styled.p`
  max-width: 450px;
  margin: 32px auto;

  color: var(--muted);

  font-family: 'DM Sans', sans-serif;
  line-height: 1.6;
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 16px;

  padding: 14px 22px;

  background: var(--text);
  color: white;

  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  span {
    font-size: 1.1rem;
  }

  &:hover {
    background: var(--accent);
  }
`;