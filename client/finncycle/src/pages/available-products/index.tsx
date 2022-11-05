import styled from "styled-components";
import Head from "next/head";
import { faRecycle, faInfo } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/generic-components/ProductCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4%;
  width: 100%;
`;

export default function AvailableProducts() {
  return (
    <>
      <Head>
        <title>Finncycle</title>
      </Head>
      <Container>
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
      </Container>
    </>
  )
}
