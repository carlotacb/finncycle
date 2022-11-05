import styled from 'styled-components';
import {colors} from "../constants/global-styles";
import Link from "next/link";

const Container = styled.main`
  width: 100%;
  height: 80px;
  background-color: ${colors.secondaryColor};
  color: ${colors.white000};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 25px;
  padding: 20px;
`;

const LinkSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 20px;
`;

const LinkText = styled.div`
  padding: 12px;
  
  &:hover {
    font-weight: bold;
    color: ${colors.primaryColor};
  }
`;

export default function Header() {
  return (
    <Container>
      <Logo>FinnCycle</Logo>
      <LinkSection>
        <Link href="/available-products" passHref>
          <LinkText>Available products</LinkText>
        </Link>
        <Link href="/my-cycles" passHref>
          <LinkText>My cycles</LinkText>
        </Link>
        <Link href="/my-profile" passHref>
          <LinkText>My profile</LinkText>
        </Link>
      </LinkSection>
    </Container>
  )
}
