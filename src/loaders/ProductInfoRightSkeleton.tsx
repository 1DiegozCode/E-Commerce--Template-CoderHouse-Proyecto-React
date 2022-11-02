import Skeleton from 'react-loading-skeleton';
import './_skeletonsLoader.scss';

export default function ProductInfoRightSkeleton() {
  return (
    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center fit-height">
      <div className="mainInfo-container py-3 ">
        <div>
          <Skeleton className='my-3 mainInfo-container__product-name'/>
          <Skeleton className='mainInfo-container__product-description my-2'/>
          <Skeleton className='mainInfo-container__price my-3'/>
          <Skeleton className='my-3 mainInfo-container__price'/>
          <Skeleton className='my-3 mainInfo-container__product-name'/> 
        </div>
      </div>
    </div>
  )
}
