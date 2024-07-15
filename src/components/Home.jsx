import React, { useEffect } from 'react'
import Banner from '../components/home/Banner'
import Home_about from '../components/home/Home_about'
import Usp from '../components/home/Usp'
import Package from '../components/home/Package'
import Cta from '../components/home/Cta'
import Scanner from '../components/home/Scanner'
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Banner/>
        <Home_about/>
        <Usp/>
        <Package/>
        <Cta/>
        <Scanner/>
    </>
  )
}

export default Home