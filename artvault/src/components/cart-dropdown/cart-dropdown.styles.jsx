import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 72px;
  right: 5%;

  width: 320px;
  max-height: 480px;

  display: flex;
  flex-direction: column;

  padding: 20px;

  background: #fff;
  border: 1px solid var(--border);

  z-index: 1001;
`;

export const CartItems = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  max-height: 350px;

  overflow-y: auto;

  scrollbar-width: thin;
`;

export const EmptyMessage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 200px;

  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: var(--muted);
`;