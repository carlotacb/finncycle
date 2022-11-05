import { GetServerSidePropsContext } from "next";
import { H1 } from "../../components/generic-components/general-styled-components";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faMoneyBillWave, faTruck } from "@fortawesome/free-solid-svg-icons";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const productId = context.params ? context.params.product_id as string : 'not-valid';

  // TODO the information from the product is retrieved here from the backend
  const productImage = "/test-image.jpeg"
  const productName = "Test product"
  const productDescription = "This is a test description to check that the app is working as expected"
  const productDeliveryFee = "3.45"

  return {
    props: {
      productId,
      productImage,
      productName,
      productDescription,
      productDeliveryFee
    },
  };
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4%;
  width: 80%;
  margin: 0 auto 30px;
`;

const Description = styled.div`
  margin: 40px 0 0;
  width: 100%;
`;

interface ProductDetailsPageProps {
  readonly productId: string;
  readonly productImage: string;
  readonly productName: string;
  readonly productDescription: string;
  readonly productDeliveryFee: string
}

export default function ProductDetailsPage(props: ProductDetailsPageProps) {
  const { productId, productDescription, productImage, productName, productDeliveryFee } = props

  return (
    <>
      <Head>
        <title>Finncycle - Product {productId}</title>
      </Head>
      <Container>
        <H1>{productName}</H1>
        <Image width="300" height="150" src={productImage} alt={productImage}/>
        <Description>
          <b><FontAwesomeIcon icon={faCircleInfo}/> More about this product: </b><br /><br />
          {productDescription}
        </Description>
        <Description>
          <b><FontAwesomeIcon icon={faMoneyBillWave}/> What I need to pay:</b><br /><br />
          For this exchange you only need to pay for the delivery, the rest is free, make a the world better by reusing things! The only thing you need to do is also create cycles, create some cycles to make things have a second life and claim products, also for that.
        </Description>
        <Description>
          <b><FontAwesomeIcon icon={faTruck}/> Delivery:</b><br /><br />
          The delivery fee is {productDeliveryFee}€ and when creating the delivery you will have the estimated time of arrival of the product!
        </Description>
      </Container>
    </>
  )
}
