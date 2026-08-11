import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 72px;
  padding: 0 5%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--background);
  color: var(--text);

  position:relative;
  z-index:10;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  color: var(--text);
  text-decoration: none;

`;

export const LogoImage=styled.img`
  width:38px;
  height:38px;
  object-fit:cover;

  border-radius:50%;
`;


export const LogoText=styled.h2`
  margin:0;

  font-family:'Playfair Display',serif;
  font-size:1.5rem;
  fomt-weight:600;
  leter-spacing:-0.02em;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavLink = styled(Link)`
   position: relative;

  padding: 8px 14px;

  color: var(--muted);

  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;

  text-transform: uppercase;
  letter-spacing: 0.06em;

  cursor: pointer;

  transition: color 0.2s ease;

  &:hover {
    color: var(--text);
  }

  &::after {
    content: '';

    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 2px;

    height: 1px;

    background: var(--accent);

    transform: scaleX(0);
    transform-origin: center;

    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;