import Head from "next/head";
import {H1, StyledButton} from "../../components/generic-components/general-styled-components";
import InputGroup from "../../components/generic-components/InputGroup";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import { loginForm } from "../../services/sessionAPI";
import { useRouter } from "next/router";
import { onInputValueChange } from "../../constants/utils";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 82vh;
  padding: 15% 0;

  @media(max-width: 768px) {
    padding: 20% 0;
  }
`;

const LoginButton = styled(StyledButton)`
  margin: 50px 10px 10px;
  width: 80%;

  @media(max-width: 768px) {
    margin: 30px 10px 10px;
  }
`;

const RegisterButton = styled(StyledButton)`
  margin: 10px 10px 50px;
  width: 80%;

  @media(max-width: 768px) {
    margin: 10px 10px 30px;
  }
`;

const ImageStyled = styled(Image)`
  margin-bottom: 20px;
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

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
          onInputChange={(e) => onInputValueChange(e, setEmail)}
          value={email}
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
        <LoginButton type="submit" onClick={() => loginForm(email, password, router)} solid>Login</LoginButton>
        <RegisterButton type="submit" outline onClick={() => {
          router.push('/register');
        }}>Register</RegisterButton>

      </Container>
    </>
  )
}
