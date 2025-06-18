import { Outlet } from 'react-router-dom';
import crown from '/src/assets/crown.svg';
import { useSelector } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';


import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utilities/firebase/firebase.utils';

import {NavbarContainer,LogoContainer,NavLinksContainer,NavLink} from './navigation.styles';

const Navbar=()=>{
  const currentUser = useSelector(selectCurrentUser);
  const {isCartOpen} = useContext(CartContext);


  return (<>
      <NavbarContainer>
        <LogoContainer to="/">
            <img className='logo' src={crown} /> 
            <h2 className='logo-text'>ART VAULT</h2>
        </LogoContainer>
        
        <NavLinksContainer>
          <NavLink  to='/shop'>SHOP</NavLink>
          {currentUser?(<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>):(<NavLink  to='/auth'>SIGN IN</NavLink>)}
          <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />} 
      </NavbarContainer>
      
      <Outlet />    
      </>)
}

export default Navbar;