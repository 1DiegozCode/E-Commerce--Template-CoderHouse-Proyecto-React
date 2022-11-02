import ProductCardSkeleton from '../../../loaders/ProductCardSkeleton';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardList from './CardList';
import './_categoryPageStyles.scss';
import { getProducts, getProductsByCategory } from '../../../services/firebase';
import FirebaseProduct from '../../../services/firebaseProductInterface';

export default function CardContainer() {
  const [productsList, setProductsList] = useState<FirebaseProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {categoryID} = useParams();

  useEffect(() => {
    setProductsList([]);
    if (categoryID === undefined) {
      getProducts().then((data) => {
        setProductsList(data);
        setIsLoading(false);
      });
    } else {
      getProductsByCategory(categoryID).then((data) => {
        setProductsList(data);
        setIsLoading(false);
      });
    }
  }, [categoryID]);
  return (
    <div className="container">
      <div className="row">
        {isLoading ? <ProductCardSkeleton cards={8}/> as any : <CardList productsList={productsList} />}
      </div>
    </div>
  );
}
