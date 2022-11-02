import FirebaseProduct from '../../services/firebaseProductInterface';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import './_productPageStyles.scss';

interface Props {
  productToAdd: FirebaseProduct;
  count: number;
}

export default function AddToCart({ productToAdd, count }: Props) {
  const { addToCart } = useContext(cartContext);

  return (
    <Link 
      to={'/cart'}
      className="addToCart-container d-flex justify-content-center align-items-center"
      onClick={() => addToCart(productToAdd, count)}
    >
      <h4 className="addToCart-container__message">Add to Cart</h4>
      <img
        className="addToCart-container__cart-image"
        src="/src/assets/svg/bag-black.svg"
        alt="cart image"
      />
    </Link>
  );
}
