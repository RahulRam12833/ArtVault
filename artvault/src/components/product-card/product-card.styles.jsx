import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;

    transition: opacity 0.3s ease;
  }

  button {
    position: absolute;
    bottom: 10%;
    left: 50%;

    width: auto;
    min-width: 130px;
    height: 42px;

    padding: 0 20px;

    transform: translate(-50%, -50%);

    opacity: 0;
    pointer-events: none;

    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(4px);

    transition: opacity 0.25s ease;
  }

  &:hover {
    img {
      opacity: 0.80;
    }

    button {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding-top: 12px;

  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
`;

export const Name = styled.span`
  color: var(--text);
`;

export const Price = styled.span`
  color: var(--muted);
  white-space: nowrap;
`;