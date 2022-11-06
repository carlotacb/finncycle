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
        <CenteredHeader>Cycles List</CenteredHeader>
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
            productName="Product Name"
            productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis malesuada ultricies. Integer ligula dui, sodales id mauris quis, aliquam rutrum mauris. Curabitur eros mi, scelerisque quis suscipit ut, commodo a ligula. Nulla posuere dapibus ornare. In dapibus turpis in sodales dignissim. Vivamus at nunc quis arcu porttitor sagittis vitae nec urna. Duis pellentesque urna eu sem ultrices, vitae tincidunt risus sagittis. Etiam rutrum erat in lacus cursus, at fermentum lacus fermentum. Vivamus quis nisl nisl. Nunc id arcu eros. Aenean eu rutrum neque. Etiam eu scelerisque nulla, sed posuere ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur mauris purus, sodales ac auctor vel, pretium eleifend quam."
            status="Pending"
          />
          <CycleCard
            productName="Product Name"
            productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis malesuada ultricies. Integer ligula dui, sodales id mauris quis, aliquam rutrum mauris. Curabitur eros mi, scelerisque quis suscipit ut, commodo a ligula. Nulla posuere dapibus ornare. In dapibus turpis in sodales dignissim. Vivamus at nunc quis arcu porttitor sagittis vitae nec urna. Duis pellentesque urna eu sem ultrices, vitae tincidunt risus sagittis. Etiam rutrum erat in lacus cursus, at fermentum lacus fermentum. Vivamus quis nisl nisl. Nunc id arcu eros. Aenean eu rutrum neque. Etiam eu scelerisque nulla, sed posuere ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur mauris purus, sodales ac auctor vel, pretium eleifend quam."
            status="Delivered"
          />
          <CycleCard
            productName="Product Name"
            productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis malesuada ultricies. Integer ligula dui, sodales id mauris quis, aliquam rutrum mauris. Curabitur eros mi, scelerisque quis suscipit ut, commodo a ligula. Nulla posuere dapibus ornare. In dapibus turpis in sodales dignissim. Vivamus at nunc quis arcu porttitor sagittis vitae nec urna. Duis pellentesque urna eu sem ultrices, vitae tincidunt risus sagittis. Etiam rutrum erat in lacus cursus, at fermentum lacus fermentum. Vivamus quis nisl nisl. Nunc id arcu eros. Aenean eu rutrum neque. Etiam eu scelerisque nulla, sed posuere ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur mauris purus, sodales ac auctor vel, pretium eleifend quam."
            status="Claimed"
          />
        </ProductsList>
      </Container>
    </>
  )
}
