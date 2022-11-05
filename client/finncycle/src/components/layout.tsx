import React from 'react';
import styled from 'styled-components';
import { maxWidthContent } from '@mundimoto-design-system/tokens/mundimoto-tokens';
import Footer from './footer';
import Header from './Header/Header';

const MainContainer = styled.main`
  max-width: ${maxWidthContent};
  margin: 0 auto;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
