import {ReactElement} from "react";
import styled from "styled-components";
import {colors} from "../../constants/global-styles";

interface ProductCardProps {
  readonly productName: string;
  readonly productDescription: string;
  readonly status: string;
}

const Container = styled.div`
  padding: 20px;
  border: 2px solid black;
  border-radius: 5px;
  width: 90%;
  margin: 0 0 20px;
`;

const ProductName = styled.div`
  font-weight: bold;
`;


const StatusChip = styled.div<{status: string}>`
  padding: 5px 0;
  width: 20%;
  text-align: center;
  border-radius: 20px;
  color: white;
  background-color: ${(props) => (props.status == 'Claimed' ? colors.transparentOrange : (props.status == 'Delivered' ? colors.transparentGreen : colors.transparentGrey))};
  
  @media(max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const ProductDescription = styled.div`
  font-size: 14px;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default function ProductCard(props: ProductCardProps) {
  const {
    productName,
    productDescription,
    status
  } = props;

  return (
    <Container>
      <FirstRow>
        <ProductName>{productName}</ProductName>
        <StatusChip status={status}>{status}</StatusChip>
      </FirstRow>
      <ProductDescription>{productDescription}</ProductDescription>
    </Container>
  )
}
