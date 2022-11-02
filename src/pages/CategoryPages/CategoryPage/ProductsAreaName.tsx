import './_categoryPageStyles.scss'

interface Props {
  productAreaName: string;
}

export default function ProductsAreaName({productAreaName}: Props) {
  return (
    <div className='p-3 m-3'>
      <h2 className='areaName-text'>{productAreaName}</h2>
      <hr className='hr-style'/>
    </div>
  )
}
