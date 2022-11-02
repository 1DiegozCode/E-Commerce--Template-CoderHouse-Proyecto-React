import { NavLink } from 'react-router-dom';
import hideBurgerMenu from '../../../utilities/hideBurgerMenu';
import './_headerStyles.scss'


export default function Logo() {
  return (
    <NavLink to='/' className='header__logo m-0' onClick={hideBurgerMenu}>
      <h1 className='header__logo m-0'>E-commerce</h1>
    </NavLink>
  );
}