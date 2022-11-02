import ProductCounter from '../ProductPage/ProductCounter';
import { CartProduct } from '../../context/CartContext';
import formatPrice from '../../utilities/formatPrice';
import { useState  } from 'react';
import './_cartStyles.scss';

interface RemoveProduct {
  (id:string): void;
}

interface Props {
  productInCart: CartProduct;
  removeProduct: RemoveProduct;
}

export default function CartRow({ productInCart, removeProduct }: Props) {
  const [quantity, setQuantity] = useState<number>(productInCart.count);

  function oneUp() {
    if (quantity < productInCart.stock) setQuantity(quantity + 1);
  }
  function oneDown() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <div className="row d-flex justify-content-center align-items-center h-auto">
      <div className="col d-flex justify-content-center align-items-center container">
        <div className="photo-container m-1">
          <img
            src={productInCart.image}
            alt="product-img"
            className="photo-container__image"
          />
        </div>
        <div className="d-flex flex-column m-1">
          <h3 className="product-title">{productInCart.name}</h3>
          <h4
            className="deleteProduct"
            onClick={() => removeProduct(productInCart.id)}
          >
            Delete Product
          </h4>
        </div>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <ProductCounter
          upCount={oneUp}
          downCount={oneDown}
          current={quantity}
        />
        <div className="d-flex flex-wrap flex-column">
          <p className="price">{formatPrice(productInCart.price)}</p>
          <p className="price--old">{formatPrice(productInCart.oldPrice)}</p>
        </div>
      </div>
      <hr className="hr-style col-11 my-4" />
    </div>
  );
}
