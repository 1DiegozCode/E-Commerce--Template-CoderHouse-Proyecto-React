
import CardContainer from './CardContainer';
import ProductsAreaName from './ProductsAreaName'
import './_categoryPageStyles.scss'


interface Props {
  productAreaName: string;
}

export default function ProductArea({productAreaName}: Props) {
  return (
    <main>
      <ProductsAreaName productAreaName={productAreaName} />
      <CardContainer />
    </main>
  )
}
