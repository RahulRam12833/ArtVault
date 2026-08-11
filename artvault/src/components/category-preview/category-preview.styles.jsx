import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const CategoryPreviewContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "text image";

  gap: 60px;

  width: 90%;
  max-width: 1400px;
  margin: 60px auto 140px;

  &:nth-child(even) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "image text";
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "text"
      "image";

      width:90%;
    gap: 25px;
    margin-bottom: 90px;

    &:nth-child(even) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "text"
        "image";
    }
  }
`;

export const CategoryHeader = styled.div`
  grid-area: text;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  margin: 0;

  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.04em;

  text-transform:uppercase;

  color: var(--text);
`;

export const Subtitle = styled.p`
  display: block;

  max-width: 280px;
  margin: 18px;

  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;

  color: var(--muted);
`;

export const ViewAll = styled(motion(Link))`
  display: inline-block;

  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: var(--text);
  text-decoration: none;

  padding-bottom: 5px;
  border-bottom: 1px solid var(--text);

  transition: all 0.25s ease;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    
  }
    
`;

export const Preview = styled.div`
  grid-area: image;

  width: 100%;

  img {
    display: block;
    width: 100%;
    height: 500px;
    object-fit: cover;
    
  }

  @media (max-width: 750px) {
    img {
      height: 350px;
    }
  }

  @media (max-width: 450px) {
    img {
      height: 280px;
    }
  }
`;