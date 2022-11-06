import React from 'react';
import {GetServerSidePropsContext} from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    redirect: {
      destination: `/login`,
      permanent: false,
    },
  };
}

export default function Home() {
  return (
    <h1>Test</h1>
  )
}
