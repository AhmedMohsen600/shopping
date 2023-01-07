import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const ProdcutCard = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-basis: calc(94.5% / 4);
  @media (max-width: 1392px) {
    flex-basis: calc(94.7% / 3);
  }
  @media (max-width: 962px) {
    flex-basis: calc(94.3% / 3);
  }
  @media (max-width: 928px) {
    flex-basis: calc(96.9% / 2);
  }
  @media (max-width: 823px) {
    flex-basis: calc(95.5% / 2);
  }
  @media (max-width: 600px) {
    flex-basis: calc(100% / 1);
  }
  color: black;
  background-color: white;
  border-radius: 10px;
  text-decoration: none;
`;

export const Holder = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .link {
    height: 200px;
  }
`;

export const ImageHolder = styled.div`
  width: 100%;
  max-height: 200px;
  border-radius: 10px;
`;

export const ProducTitle = styled.h3`
  font-size: 14px;
`;

export const ProductDesc = styled.p`
  font-size: 12px;
  color: gray;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Price = styled.span`
  font-size: 20px;
`;
