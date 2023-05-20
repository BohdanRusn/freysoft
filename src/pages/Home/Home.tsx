import React from "react";
import Transactions from "../../components/Transactions/Transactions";
import CreditCardComponent from "../../components/CreditCard/CreditCardComponent";

function Home() {
  return (
    <>
      <CreditCardComponent />
      <Transactions />
    </>
  );
}

export default Home;
