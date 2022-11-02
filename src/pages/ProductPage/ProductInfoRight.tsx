import AddToCart from './AddToCart';
import ProductCounter from './ProductCounter';
import FirebaseProduct from '../../services/firebaseProductInterface';
import formatPrice from '../../utilities/formatPrice';
import { useContext, useState } from 'react';
import { cartContext } from '../../context/CartContext';
import './_productPageStyles.scss';

interface Props {
  textInfo: FirebaseProduct;
}

export default function ProductInfoRight({ textInfo }: Props) {
  const { getCartCount } = useContext(cartContext);
  const [quantity, setQuantity] = useState<number>(getVisualCount());

  function oneUp() {
    if (quantity < textInfo.stock) setQuantity(quantity + 1);
  }
  function oneDown() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function getVisualCount(): number {
    return getCartCount(textInfo.id) > 0 ? getCartCount(textInfo.id) : 1;
  }

  return (
    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center fit-height">
      <div className="mainInfo-container py-3 ">
        <div>
          <h2 className="mainInfo-container__product-name">{textInfo.name}</h2>
          <p className="mainInfo-container__product-description">
            {textInfo.description}
          </p>
          <div className="d-flex flex-wrap align-items-center">
            <p className="mainInfo-container__price">
              {formatPrice(textInfo.price)}
            </p>
            <p className="mainInfo-container__price--old mx-2">
              {formatPrice(textInfo.oldPrice)}
            </p>
            <ProductCounter
              current={quantity}
              upCount={oneUp}
              downCount={oneDown}
            />
          </div>
        </div>
        <AddToCart productToAdd={textInfo} count={quantity} />
      </div>
    </div>
  );
}
