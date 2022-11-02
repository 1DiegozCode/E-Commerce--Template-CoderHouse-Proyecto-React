import PhotoCarousel from './PhotoCarousel';
import ProductInfoRight from './ProductInfoRight';
import FirebaseProduct from '../../services/firebaseProductInterface';
import './_productPageStyles.scss';

interface Props {
  product: FirebaseProduct;
}

export default function ProductInfo({ product }: Props) {
  return (
    <main className="productInfo-container col-9 container">
      <div className="row gx-5 gy-0 full-heigh d-flex justify-content-center align-items-center">
        <PhotoCarousel image={product}/>
        <ProductInfoRight textInfo={product} />
      </div>
    </main>
  )
}
