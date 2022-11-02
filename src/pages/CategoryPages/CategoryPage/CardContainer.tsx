import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './_categoryPageStyles.scss';
import { getProducts, getProductsByCategory } from '../../../services/firebase';
import FirebaseProduct from '../../../services/firebaseProductInterface';

export default function CardContainer() {
  const [productsList, setProductsList] = useState<FirebaseProduct[]>([]);
  const {categoryID} = useParams();

  useEffect(() => {
    setProductsList([]);
    if (categoryID === undefined) {
      getProducts().then((data) => {
        setProductsList(data);
      });
    } else {
      getProductsByCategory(categoryID).then((data) => {
        setProductsList(data);
      });
    }
  }, [categoryID]);
  return (
    <div className="container">
      <div className="row">
        {productsList.map(
          ({
            id,
            name,
            description,
            category,
            stock,
            image,
            price,
            oldPrice,
          }: FirebaseProduct) => (
            <div className="col d-flex justify-content-center" key={id}>
              <ProductCard
                id={id}
                name={name}
                image={image}
                price={price}
                oldPrice={oldPrice}
                stock={stock}
                category={category}
                description={description}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
