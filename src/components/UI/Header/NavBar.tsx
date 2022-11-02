import NavBarLink from './NavBarLink';
import './_headerStyles.scss';

interface Props {
  categories: string[];
}

export default function NavBar({categories}: Props) {
  return (
    <div className='menu-container'>
      {categories.map((category) => (
        <div key={category} className="col-3">
          <NavBarLink category={category} />
        </div>
      ))}
    </div>
  );
}
