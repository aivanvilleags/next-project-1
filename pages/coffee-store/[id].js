import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import coffeeStoreData from "../../data/coffee-stores.json";

//SERVER

export function getStaticProps({ params }) {
  return {
    props: {
      coffeeStore: coffeeStoreData.find(
        (store) => store.id.toString() === params.id
      ),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoreData.map((store) => {
    return {
      params: {
        id: store.id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}
//CLIENT
const CoffeeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>LOADING ...</div>;
  }

  const { address, name, neighbourhood } = props.coffeeStore;
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">Back to home</Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  );
};

export default CoffeeStore;
