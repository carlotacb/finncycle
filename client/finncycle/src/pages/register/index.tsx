import Head from "next/head";
import {H1, StyledButton} from "../../components/generic-components/general-styled-components";
import InputGroup from "../../components/generic-components/InputGroup";
import styled from "styled-components";
import { useState } from "react";
import { onInputValueChange } from "../../constants/utils";
import { registerForm } from "../../services/sessionAPI";
import { useRouter } from "next/router";

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

export default function Register() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const router = useRouter();

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
          onInputChange={(e) => onInputValueChange(e, setEmail)}
          value={email}
          isInputType
        />
        <InputGroup
          editable
          label="Phone number"
          required
          id="phone"
          type="phone"
          onInputChange={(e) => onInputValueChange(e, setPhone)}
          value={phone}
          isInputType
        />
        <InputGroup
          editable
          label="Password"
          required
          id="password"
          type="password"
          onInputChange={(e) => onInputValueChange(e, setPassword)}
          value={password}
          isInputType
        />
        <InputGroup
          editable
          label="Full name"
          required
          id="name"
          type="text"
          onInputChange={(e) => onInputValueChange(e, setName)}
          value={name}
          isInputType
        />
        <InputGroup
          editable
          label="Address"
          required
          id="address"
          type="text"
          onInputChange={(e) => onInputValueChange(e, setAddress)}
          value={address}
          isInputType
        />
        <InputGroup
          editable
          label="Zip Code"
          required
          id="zip-code"
          type="number"
          onInputChange={(e) => onInputValueChange(e, setZipCode)}
          value={zipCode}
          isInputType
        />
        <DoubleInputGroup>
          <InputGroup
            editable
            label="City"
            required
            id="city"
            type="text"
            onInputChange={(e) => onInputValueChange(e, setCity)}
            value={city}
            small
            isInputType
          />
          <InputGroup
            editable
            label="Country"
            required
            id="country"
            type="text"
            onInputChange={(e) => onInputValueChange(e, setCountry)}
            value={country}
            small
            isInputType
          />
        </DoubleInputGroup>

        <CreateButton type="submit" onClick={() => registerForm(email, password, phone, name, address, zipCode, city, country, router)} solid>Register</CreateButton>
      </Container>
    </>
  )
}
