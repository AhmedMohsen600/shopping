import './styles/product.css';
import {
  ProdcutCard,
  ProducTitle,
  ProductDesc,
  Price,
  ProductImage,
  ImageHolder,
  Holder,
} from './styles/product';

export default function Product({
  src,
  title,
  price,
  description,
  id,
  category,
}) {
  return (
    <ProdcutCard to={`/product/${category}/${id}`}>
      <ImageHolder>
        <ProductImage src={src} />
      </ImageHolder>
      <Holder>
        <ProducTitle>{title}</ProducTitle>
        <ProductDesc>{description}</ProductDesc>
        <Price>{`$${price}`}</Price>
      </Holder>
    </ProdcutCard>
  );
}
