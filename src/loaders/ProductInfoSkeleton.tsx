import Skeleton from 'react-loading-skeleton';
import ProductInfoRightSkeleton from './ProductInfoRightSkeleton';
import ProductInfoCarouselSkeleton from './ProductInfoCarouselSkeleton';
import './_skeletonsLoader.scss';

export default function ProductInfoSkeleton() {
  return (
    <main className="productInfo-container col-9 container">
    <div className="gx-5 gy-0 full-heigh d-flex justify-content-center align-items-center">
      <ProductInfoCarouselSkeleton />
      <ProductInfoRightSkeleton />
    </div>
  </main>
  )
}
