import React from 'react'
import Header from './components/Header'
import Plans from './components/Plans';
import Functionalities from './components/Functionalities';
import BillingOnline from './components/BillingOnline';
import "./css/style.css";

const Billing = () => {
  return (
    <>
      <Header />
      <Functionalities />
      <Plans />
      <BillingOnline />
    </>
  )
}

export default Billing