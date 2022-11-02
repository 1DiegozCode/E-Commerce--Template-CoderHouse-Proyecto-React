import ProductInfo from './ProductInfo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FirebaseProduct from '../../services/firebaseProductInterface';
import { getProduct } from '../../services/firebase';
import './_productPageStyles.scss';

export default function ProductPage() {
  const [product, setProduct] = useState<FirebaseProduct>();
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    getProduct(productID as string)
      .then((data) => {
        setProduct(data as FirebaseProduct);
      })
      .catch((error) => {
        console.log(error.message);
        setFeedbackMsg(error.message);
      });
  }, [productID]);

  return (
    <section className="productPage-container">
      <div className="productPage-container__decoration" />
      {product === undefined ? (
        <h4>Error: {feedbackMsg}</h4>
      ) : (
        <ProductInfo product={product as FirebaseProduct} />
      )}
    </section>
  );
}
