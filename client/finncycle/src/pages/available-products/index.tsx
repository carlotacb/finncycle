import styled from "styled-components";
import Head from "next/head";
import { faRecycle, faInfo } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/generic-components/ProductCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {H1} from "../../components/generic-components/general-styled-components";

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
        <H1>Second Life Wait List</H1>
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
