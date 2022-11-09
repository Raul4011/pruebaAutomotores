import React from 'react'
import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PagoFacil from '../components/PagoFacil';
import Articulo from '../components/Articulo';
import Articulo2 from '../components/Articulo2';

const Home = () => {
  return (
    <>
      <Header />
      <Carrousel />
      <Articulo />
      <PagoFacil />
      <Articulo2 />
      <Footer />
    </>
  )
}

export default Home