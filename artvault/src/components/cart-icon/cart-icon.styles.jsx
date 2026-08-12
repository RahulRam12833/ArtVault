import styled from 'styled-components';

export const CartIconContainer = styled.div`
  position: relative;

  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const ShoppingBag = styled.img`
  width: 28px;
  height: 28px;

  display: block;
`;

export const ItemCount = styled.span`
  position: absolute;

  top: 14px;
  right: 8px;

  min-width: 10px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 4px;

  border-radius: 50%;

  background: #357ae8;
  color: var(--background);

  font-family: 'DM Sans', sans-serif;
  font-size: 0.6rem;
  font-weight: 600;
  line-height: 1;
`;