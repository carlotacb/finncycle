import React from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Header from './header';

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export default function Layout(props: { children: any }) {
  const { children } = props;

  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
}
