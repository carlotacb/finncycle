import styled from "styled-components";
import {colors} from "../constants/global-styles";

const Container = styled.main`
  width: 100%;
  height: 80px;
  bottom: 0;
  background-color: ${colors.secondaryColor};
  color: ${colors.white000};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.div`
  font-size: 15px;
`;

export default function Footer() {
  return (
    <Container>
      <FooterText>An application with Wolt integration</FooterText>
    </Container>
    )
}

