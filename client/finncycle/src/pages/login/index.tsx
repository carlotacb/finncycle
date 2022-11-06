import Head from "next/head";
import {H1, StyledButton} from "../../components/generic-components/general-styled-components";
import InputGroup from "../../components/generic-components/InputGroup";
import styled from "styled-components";
import {BaseSyntheticEvent} from "react";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4%;
  height: 100vh;
  margin-top: 20%;
`;

const LoginButton = styled(StyledButton)`
  margin: 10px 10px 50px;
  width: 80%;

  @media(max-width: 768px) {
    margin: 10px 10px 30px;
  }
`;

const ImageStyled = styled(Image)`
  margin-bottom: 20px;
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
        <ImageStyled src="/logo.png" alt="logo" width={120} height={120}/>
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
        <LoginButton type="submit" onClick={() => null} solid>Login</LoginButton>
      </Container>
    </>
  )
}
