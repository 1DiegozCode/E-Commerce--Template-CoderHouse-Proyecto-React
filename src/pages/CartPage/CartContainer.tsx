import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import formatPrice from '../../utilities/formatPrice';
import CartRow from './CartRow';
import CheckOutButton from './CheckOutButton';
import './_cartStyles.scss';

export default function CartContainer() {
  const { getTotal, cart, removeProduct } = useContext(cartContext);

  return (
    <main className="cart-container container d-flex justify-content-center align-items-center py-5">
      <div className="col-12 cartOrder-container py-5">
        {cart.map((product: any) => (
          <div key={product.id}>
            <CartRow productInCart={product} removeProduct={removeProduct} />
          </div>
        ))}
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="mx-5 price--total">
            {`TOTAL ${formatPrice(getTotal())}`}
          </h4>
          <CheckOutButton />
        </div>
      </div>
    </main>
  );
}
