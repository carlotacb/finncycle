import React from 'react';
import {GetServerSidePropsContext} from "next";
import {getSession} from "../constants/utils";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (getSession() != null) {
    return {
      redirect: {
        destination: `/available-products`,
        permanent: false,
      },
    };
  }

  else {
    return {
      redirect: {
        destination: `/login`,
        permanent: false,
      },
    };
  }
}

export default function Home() {
  return (
    <h1>Test</h1>
  )
}
