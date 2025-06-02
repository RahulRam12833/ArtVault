import { Link, Outlet } from 'react-router-dom';
import crown from '/src/assets/crown.svg';
import './navigation.styles.scss';

const Navbar=()=>{
  return (<>
      <div className='navbar'>
        <Link className='logo-container' to="/">
            <img className='logo' src={crown} /> 
            <h2 className='logo-text'>ART VAULT</h2>
        </Link>
        
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          <Link className='nav-link' to='/auth'>SIGN IN</Link>
        </div>
      </div>
      <Outlet />    
      </>)
}

export default Navbar;