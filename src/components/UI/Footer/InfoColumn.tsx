import './_footerStyles.scss'

const categories: string[] = ['PS', 'XBOX', 'NINTENDO', 'PC']

export default function InfoColumn() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center py-0'>
        <h4 className='infoColumn__title my-3'>Categories</h4>
        {categories.map((category) => (
          <h5 className='infoColumn__text' key={category}>{category}</h5>
        ))}
    </div>
  )
}
