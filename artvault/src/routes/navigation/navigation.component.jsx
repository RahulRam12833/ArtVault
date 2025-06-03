import { Link, Outlet } from 'react-router-dom';
import crown from '/src/assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

import { signOutUser } from '../../utilities/firebase/firebase.utils';

import './navigation.styles.scss';

const Navbar=()=>{
  const { currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);


  return (<>
      <div className='navbar'>
        <Link className='logo-container' to="/">
            <img className='logo' src={crown} /> 
            <h2 className='logo-text'>ART VAULT</h2>
        </Link>
        
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          {currentUser?(<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>):(<Link className='nav-link' to='/auth'>SIGN IN</Link>)}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown />} 
      </div>
      
      <Outlet />    
      </>)
}

export default Navbar;