import './_footerStyles.scss'

export default function FormDiscount() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center discount-form'>
      <h4 className='discount-form__title'>Get 10% of discount in your first purchase!</h4>
      <input className='discount-form__form' type="email" placeholder='ecommerce.user@ecommerce.com' />
    </div>
  )
}
