import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer=styled.section`
  min-height:calc(100vh - 80px);

  padding:60px 7%;

  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  align-items:center;
  gap:6rem;

  background:var(--background);

  @media(max-width:768px){
   grid-template-columns:1fr;
   gap:3rem;
   pdding:60px 6%;
  }
`;

export const HeroContent=styled.div`
  max-width:700px;
`;

export const Eyebrow=styled.p`
  margin:0 0 24px;
  
  color:var(--accent);

  fomt-family:'DM Sans',sans-serif;
  font-size:0.75rem;
  font-weight:600;

  letter-spacing:0.18em;
  text-transform:uppercase;
`;

export const HeroTitle=styled.h1`
 margin:0;

 font-family:'Playfair Display', serif;
 font-size: clamp(4rem, 7vw, 7rem);
  font-weight: 500;
  line-height: 0.92;
  letter-spacing: -0.05em;

  color: var(--text);
`;

export const HeroDescription = styled.p`
  max-width: 440px;
  margin: 32px 0;

  color: var(--muted);

  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
`;

export const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 18px;

  padding: 14px 22px;

  background: var(--text);
  color: white;

  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  transition:
    background 0.25s ease,
    transform 0.25s ease;

  span {
    font-size: 1.1rem;
    transition: transform 0.25s ease;
  }

  &:hover {
    background: var(--accent);
    transform: translateY(-2px);
  }

  &:hover span {
    transform: translateX(4px);
  }
`;

export const HeroArtwork = styled.div`
  width: 100%;
  max-width: 550px;
  aspect-ratio: 4 / 5;

  background: var(--surface);
  border: 1px solid var(--border);

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 450px;
    margin: 0 auto;
  }
`;