import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { cartContext } from '../../../context/CartContext';
import hideBurgerMenu from '../../../utilities/hideBurgerMenu';
import './_headerStyles.scss';

export default function Cart() {
  const {getTotalProducts} = useContext(cartContext);
  

  return (
    <NavLink
      className="d-flex justify-content-center align-items-center cart-counter"
      to={'/cart'}
      onClick={hideBurgerMenu}
    >
      <img src="/src/assets/svg/Bag-Outline.svg" className="cart-image m-0" />
      <h3 className="cart-counter my-5 py-5">{getTotalProducts() > 0 && getTotalProducts()}</h3>
    </NavLink>
  );
}
