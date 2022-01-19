import React, { useEffect } from 'react'
import Header from './components/Header'
import Plans from './components/Plans';
import Functionalities from './components/Functionalities';
import BillingOnline from './components/BillingOnline';
import "./css/style.css";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Billing = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <motion.div 
    exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    id="backgroundAboutUs2">
      <Header />
      <Functionalities />
      <Plans />
      <BillingOnline />
    </motion.div>
  )
}

export default Billing