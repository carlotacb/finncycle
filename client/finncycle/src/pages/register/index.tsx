import Head from "next/head";
import {H1, StyledButton} from "../../components/generic-components/general-styled-components";
import InputGroup from "../../components/generic-components/InputGroup";
import styled from "styled-components";
import {BaseSyntheticEvent} from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4%;
`;

const DoubleInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const CreateButton = styled(StyledButton)`
  margin: 10px 10px 50px;
  width: 80%;

  @media(max-width: 768px) {
    margin: 10px 10px 30px;
  }
`;

const onInputValueChange = (
  event: BaseSyntheticEvent,
) => {
  console.log(event.target.value)
};

export default function Login() {
  return(
    <>
      <Head>
        <title>Finncycle - Register new user</title>
      </Head>
      <Container>
        <H1>Register</H1>
        <InputGroup
          editable
          label="Email"
          required
          id="email"
          type="email"
          onInputChange={onInputValueChange}
          value=""
          isInputType
        />
        <InputGroup
          editable
          label="Password"
          required
          id="password"
          type="password"
          onInputChange={onInputValueChange}
          value=""
          isInputType
        />
        <InputGroup
          editable
          label="Full name"
          required
          id="name"
          type="text"
          onInputChange={onInputValueChange}
          value=""
          isInputType
        />
        <InputGroup
          editable
          label="Address"
          required
          id="address"
          type="text"
          onInputChange={onInputValueChange}
          value=""
          isInputType
        />
        <InputGroup
          editable
          label="Zip Code"
          required
          id="zip-code"
          type="number"
          onInputChange={onInputValueChange}
          value=""
          isInputType
        />
        <DoubleInputGroup>
          <InputGroup
            editable
            label="City"
            required
            id="city"
            type="text"
            onInputChange={onInputValueChange}
            value=""
            small
            isInputType
          />
          <InputGroup
            editable
            label="Country"
            required
            id="country"
            type="text"
            onInputChange={onInputValueChange}
            value=""
            small
            isInputType
          />
        </DoubleInputGroup>

        <CreateButton type="submit" onClick={() => null} solid>Update information</CreateButton>
      </Container>
    </>
  )
}
