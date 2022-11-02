import FirebaseProduct from '../../../services/firebaseProductInterface';
import ProductCard from './ProductCard';

interface Props {
  productsList: FirebaseProduct[];
}

export default function CardList({ productsList }: Props) {
  return (
    <>
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
    </>
  );
}
