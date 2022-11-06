import styled from "styled-components";
import Head from "next/head";
import {H1, StyledButton} from "../../components/generic-components/general-styled-components";
import CycleCard from "../../components/generic-components/CycleCard";
import {useRouter} from "next/router";

const CenteredHeader = styled(H1)`
  text-align: center;
`;

const Container = styled.div`
  padding: 4%;
  width: 100%;
`;

const ButtonToTheRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-left: 5%;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const ButtonForFilter = styled(StyledButton)`
  text-transform: capitalize;
  padding: 5px 10px;
  font-size: 16px;
  
  @media(max-width: 768px) {
    font-size: 12px;
  }
`;

export default function MyCycles() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Finncycle - My cycles</title>
      </Head>
      <Container>
        <CenteredHeader>Cycle Contributions</CenteredHeader>
        <ButtonToTheRight>
          <StyledButton solid onClick={() => {
            router.push('/my-cycles/create');
          }}>Start new cycle</StyledButton>
        </ButtonToTheRight>
        <FilterButtons>
          <ButtonForFilter solid>All</ButtonForFilter>
          <ButtonForFilter outline>reused</ButtonForFilter>
          <ButtonForFilter outline>recycled</ButtonForFilter>
          <ButtonForFilter outline>claimed</ButtonForFilter>
        </FilterButtons>
        <ProductsList>
          <CycleCard
            productName="Samsung S8 Phone"
            productDescription="Used it in the past, now it cooks perfect but I'm doing an upgrade"
            status="Pending"
          />
          <CycleCard
            productName="Bluetooth Speaker"
            productDescription="I have made partys with it and its reliable. Now I want to give it to someone who wants to enjoy music too. For further questions search Ultimate Ears MEGABOOM 3 Wireless Bluetooth Speaker"
            status="Pending"
          />
          <CycleCard
            productName="Electric Scooter"
            productDescription="Really fast Scooter, in great shape still. Ideal to traverse Helsinki"
            status="Delivered"
          />
          <CycleCard
            productName="Computer Monitor 70Hz"
            productDescription="47,32inch monitor in good condition. 75hz refresh rate 1440p resolution"
            status="Claimed"
          />
        </ProductsList>
      </Container>
    </>
  )
}
