import React from "react";
import Transactions from "../../components/Transactions/Transactions";
import CreditCardComponent from "../../components/CreditCard/CreditCardComponent";
import Analytics from "../../components/Analytics/Analytics";

function Home() {
  return (
    <>
      <CreditCardComponent />
      <Analytics />
      <Transactions />
    </>
  );
}

export default Home;
