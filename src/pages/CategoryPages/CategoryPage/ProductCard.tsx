import './_categoryPageStyles.scss';
import { Link } from 'react-router-dom';
import FirebaseProduct from '../../../services/firebaseProductInterface';
import formatPrice from '../../../utilities/formatPrice';

export default function ProductCard({
  id,
  name,
  image,
  price,
  oldPrice,
}: FirebaseProduct) {
  return (
    <Link to={`/product/${id}`} className='react-link'>
      <div className="product-card mx-4 my-5">
        <div className="product-card__image-container">
          <img src={image} alt="" className="product-card__image" />
        </div>
        <div className="my-3">
          <h4 className="product-card__name">{name}</h4>
          <div className="d-flex justify-content-between">
            <p className="product-card__price">{formatPrice(price)}</p>
            <p className="product-card__price--old">{formatPrice(oldPrice)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
