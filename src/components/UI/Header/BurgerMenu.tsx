import './_headerStyles.scss'

export default function BurgerMenu() {
  return (
    <>
      <input type="checkbox"id="check"/>
      <label htmlFor='check'className="bar-btn">
        <img src='/src/assets/svg/hamburger-menu.svg' className='burger-menu m-0'/>
      </label>
    </>           
  )
}

