import Qualities from './Qualities';
import './_categoryPageStyles.scss'


interface Props {
  message: string;
  qualities: [string, string, string];
}

export default function CallToAction({message, qualities}: Props) {
  return (
    <section className='container-fluid callToAction-container px-5 py-3 d-flex flex-column'>
      <h2 className='main-message mx-3 my-2'>{message}</h2>
      <Qualities qualities={qualities} />
    </section>
  )
}
