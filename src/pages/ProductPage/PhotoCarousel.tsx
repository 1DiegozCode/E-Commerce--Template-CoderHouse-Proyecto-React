import FirebaseProduct from '../../services/firebaseProductInterface';
import './_productPageStyles.scss';


interface Props {
  image: FirebaseProduct;
}

export default function PhotoCarousel({image}:Props) {
  return (
    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center fit-height">
      <div className="mainPhoto-container d-flex justify-content-center align-items-center">
        <img
          src={image.image}
          alt="main photo picture"
          className='mainPhoto-container__image'
        />
      </div>
    </div>
  );
}
