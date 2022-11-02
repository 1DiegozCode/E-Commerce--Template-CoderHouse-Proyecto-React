import './_headerStyles.scss'
import NavBar from './NavBar';
import Logo from './Logo';
import Cart from './Cart';
import BurgerMenu from './BurgerMenu';


export default function Header() {
  return (
    <header className='sticky-top'>
      <nav className='header'>
          <BurgerMenu />
        <div>
          <Logo />
        </div>
        <NavBar categories={['PS', 'XBOX', 'NINTENDO', 'PC']} />
        <Cart />
      </nav>
    </header>
  )
}

