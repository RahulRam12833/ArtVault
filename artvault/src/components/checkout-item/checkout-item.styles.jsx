import styled from 'styled-components';

export const CheckoutItemContainer = styled.article`
  position: relative;

  display: grid;
  grid-template-columns: 150px 1fr auto auto;

  gap: 25px;
  align-items: center;

  padding: 25px 0;

  border-bottom: 1px solid var(--border);

  @media (max-width: 650px) {
    grid-template-columns: 100px 1fr auto;

    gap: 15px;

    padding: 20px 0;
  }
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;

  overflow: hidden;

  background: var(--background);

  img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (max-width: 650px) {
    width: 100px;
    height: 120px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-width: 0;
`;

export const ItemName = styled.h3`
  margin: 0;

  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.1;

  color: var(--text);

  @media (max-width: 650px) {
    font-size: 1.1rem;
  }
`;

export const ItemType = styled.span`
  margin-top: 7px;

  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;

  color: var(--muted);
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;

  border: 1px solid var(--border);
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;

  border: none;
  background: transparent;

  font-size: 1rem;
  color: var(--text);

  cursor: pointer;

  transition: background 0.2s ease;

  &:hover {
    background: var(--background);
  }
`;

export const QuantityValue = styled.span`
  min-width: 30px;

  text-align: center;

  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;

  color: var(--text);
`;

export const Price = styled.span`
  align-self: center;

  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;

  white-space: nowrap;

  color: var(--text);

  @media (max-width: 650px) {
    grid-column: 2;
    margin-top: -10px;
  }
`;

export const RemoveButton = styled.button`
  align-self: start;

  width: 25px;
  height: 25px;

  padding: 0;

  border: none;
  background: transparent;

  font-size: 1.2rem;
  font-weight: 300;

  color: var(--muted);

  cursor: pointer;

  transition: color 0.2s ease;

  &:hover {
    color: var(--accent);
  }
`;