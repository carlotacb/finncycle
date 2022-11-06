import styled from 'styled-components';
import {colors} from "../constants/global-styles";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsSpin, faIdCard, faTruckFast} from "@fortawesome/free-solid-svg-icons";
import {isLoggedIn} from "../constants/utils";

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

const LinkInformation = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`;

const LinkText = styled.div`
  margin-left: 10px;
  
  &:hover {
    font-weight: bold;
    color: ${colors.primaryColor};
  }
  
  @media(max-width: 768px) {
    display: none;
  }
`;

export default function Header() {

  return (
    <Container>
      <Logo>FinnCycle</Logo>
      {isLoggedIn() ?
        <LinkSection>
          <Link href="/available-products" passHref>
            <LinkInformation>
              <FontAwesomeIcon icon={faTruckFast} />
              <LinkText>Available products</LinkText>
            </LinkInformation>
          </Link>
          <Link href="/my-cycles" passHref>
            <LinkInformation>
              <FontAwesomeIcon icon={faArrowsSpin} />
              <LinkText>My cycles</LinkText>
            </LinkInformation>
          </Link>
          <Link href="/my-profile" passHref>
            <LinkInformation>
              <FontAwesomeIcon icon={faIdCard} />
              <LinkText>My profile</LinkText>
            </LinkInformation>
          </Link>
        </LinkSection> :
        null }
    </Container>
  )
}
