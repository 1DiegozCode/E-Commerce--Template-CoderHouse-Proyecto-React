import Skeleton from 'react-loading-skeleton';
import './_skeletonsLoader.scss';

export default function ProductInfoCarouselSkeleton() {
  return (
    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center fit-height">
      <Skeleton className='mainPhoto-container-skeleton' style={{width: '28.125rem'}}/>
    </div>
  )
}
