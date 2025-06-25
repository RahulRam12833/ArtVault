import { Outlet } from 'react-router-dom';
import crown from '/src/assets/crown.svg';
import { useSelector,useDispatch} from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';



import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import {signOutStart } from '../../store/user/user.action';

import {NavbarContainer,LogoContainer,NavLinksContainer,NavLink} from './navigation.styles';

const Navbar=()=>{
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());
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