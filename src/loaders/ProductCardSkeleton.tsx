import Skeleton from 'react-loading-skeleton';
import './_skeletonsLoader.scss';

interface Props {
  cards: number;
}

export default function ProductCardSkeleton({ cards }: Props) {
  return (
    <>
      '
      {Array(cards)
        .fill(0)
        .map((card, index) => (
          <div className='col d-flex justify-content-center' key={index}>
            <div className="product-card-skeleton mx-4 my-5">
              <Skeleton className="product-card-skeleton__image-container" />
              <div className="my-3">
                <Skeleton height={35} className="my-1" />
                <Skeleton height={20} />
              </div>
            </div>
          </div>
        ))}
      ' )
    </>
  );
}
