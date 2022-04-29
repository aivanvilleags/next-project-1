import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      CoffeeStore Page {router.query.id}
      <Link href="/">Back to home</Link>
      <Link href="/coffee-store/x">Dynamic</Link>
    </div>
  );
};

export default CoffeeStore;
