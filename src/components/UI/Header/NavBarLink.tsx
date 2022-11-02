import { NavLink } from 'react-router-dom';
import hideBurgerMenu from '../../../utilities/hideBurgerMenu';
import './_headerStyles.scss';

interface Props {
  category: string;
}

export default function NavBarLink({ category }: Props) {
  
  return (
    <NavLink
      to={`/category/${category.toLowerCase()}`}
      className="header__link nav-bar__link"
      onClick={hideBurgerMenu}
    >
      <h3 className="header__link nav-bar__link">{category}</h3>
    </NavLink>
  );
}
