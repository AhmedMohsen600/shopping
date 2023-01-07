import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  margin: 40px 0;
`;

export const Inner = styled.div`
  margin: auto;
  width: 95%;
  display: flex;
  gap: 40px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageHolder = styled.div`
  flex: 1;
  max-height: 600px;
  @media (max-width: 600px) {
    max-height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const DetailsHolder = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductDesc = styled.p`
  font-size: 20px;
  color: #929292;
`;

export const ProducTitle = styled.h3`
  font-size: 30px;
`;
