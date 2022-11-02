import Logo from '../Header/Logo'
import FormDiscount from './FormDiscount'
import InfoColumn from './InfoColumn'

import './_footerStyles.scss'

export default function Footer() {
  return (
    <div className='footer_container container-fluid py-1'> 
      <div className='row my-5'>
        <div className='col-6 col-md-3 d-flex justify-content-center align-items-center my-3'>
          <InfoColumn />
        </div>
        <div className='col-6 col-md-3 d-flex justify-content-center align-items-center my-3'>
          <InfoColumn />
        </div>
        <div className='col-12 col-md-6 d-flex justify-content-center align-items-center my-3'>
          <FormDiscount />
        </div>
      </div>
      <div className='row d-flex justify-content-center my-3'>
        <hr className='hr-style--footer col-11'/>
      </div>
      <div className='row d-flex flex-column justify-content-center align-items-center col-12'>
        <Logo />
        <p className='footer-bottom__credits my-2'>Copyright © DiegoBenavides | Designed by DiegoBenavides - Powered by Magic</p>
        <div className='d-flex justify-content-center py-4'>
          <img src="/src/assets/svg/mastercard.svg" alt="mastercard logo" className='mx-3'/>
          <img src="/src/assets/svg/visa.svg" alt="visa logo" className='mx-3'/>
          <img src="/src/assets/svg/apple_pay.svg" alt="apple pay logo" className='mx-3'/>
        </div>
      </div>
    </div>
  )
}
