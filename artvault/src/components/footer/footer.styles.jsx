import styled from "styled-components";

export const FooterContainer = styled.footer`
  border-top: 1px solid var(--border);
  padding: 30px 7%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const FooterBrand = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: var(--text);
`;

export const FooterTagline = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.04em;
`;

export const FooterCopyright = styled.span`
  font-size: 0.7rem;
`;