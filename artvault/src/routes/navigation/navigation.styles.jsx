import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
 width:100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 300px;
    padding: 10px;  
    display:flex;
    align-items: center;
    gap: 10px;
    color:black
`

export const NavLinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    font-weight: 500;
    color: rgb(0, 0, 0);
    `
