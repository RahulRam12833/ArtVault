import { Link, Outlet } from 'react-router-dom';


const Navbar=()=>{
  return (<>
      <div className='navbar'>
        <Link className='logo-container' to="/">
            <div>Logo</div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
        </div>
      </div>
      <Outlet />
      </>)
}

export default Navbar;