import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import vangogh from "../../assets/vangogh.png"


import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutUser } from '../../utilities/firebase/firebase.utils';

import {NavbarContainer,LogoContainer,NavLinksContainer,NavLink,LogoText,LogoImage} from './navigation.styles';

const Navbar=()=>{
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (<>
      <NavbarContainer>
        <LogoContainer to="/">
            <LogoImage src={vangogh} /> 
            <LogoText >ArtVault</LogoText>
        </LogoContainer>
        
        <NavLinksContainer>
          <NavLink  to='/shop'>EXPLORE</NavLink>
          {currentUser?(<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>):(<NavLink  to='/auth'>SIGN IN</NavLink>)}
          <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />} 
      </NavbarContainer>
      
      <Outlet />    
      </>)
}

export default Navbar;