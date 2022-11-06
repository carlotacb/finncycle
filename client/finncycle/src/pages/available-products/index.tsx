import styled from "styled-components";
import Head from "next/head";
import { faRecycle, faInfo } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/generic-components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H1 } from "../../components/generic-components/general-styled-components";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4%;
  width: 100%;
`;

const openModal = (id: string) => {
  confirmAlert({
    title: 'Are you sure?',
    message: `Confirm that you want to claim the product with id: ${id}?`,
    buttons: [
      {
        label: 'Yes',
        onClick: () => claimProduct(id)
      },
      {
        label: 'No'
      }
    ]
  });
};

const claimProduct = (id: string) => {
  console.log(`the product ${id} is claimed`)
}

export default function AvailableProducts() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Finncycle - Available products</title>
      </Head>
      <Container>
        <H1>Second Life Wait List</H1>
        <ProductCard
          productName="Chair"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonOnClick={() => openModal("test")}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
          outlineButtonOnClick={() => {
            router.push('/available-products/fridge');
          }}
        />
        <ProductCard
          productName="Laptop"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonOnClick={() => openModal("test")}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
          outlineButtonOnClick={() => {
            router.push('/available-products/laptop');
          }}
        />
        <ProductCard
          productName="Washing machine"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonOnClick={() => openModal("test")}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Sofa"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonOnClick={() => openModal("test")}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Wardrobe"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Table"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Lamp"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Fridge"
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
