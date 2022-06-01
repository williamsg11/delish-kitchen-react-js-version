import React from "react";
import{BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Hero from './components/Hero'
import Products from "./components/products";
import { productData, productDataTwo, productDataThree } from "./components/products/data";
import Feature from "./components/Feature";
import FeatureTwo from "./components/FeatureTwo";
import Footer from "./components/Footer";
function App() {
  return (
     
    <Router >    
      <GlobalStyle />
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
      <Feature/>
      <Products heading='Sweet Treats For You' data={productDataTwo}/>
      <FeatureTwo/>
      <Products heading='Special Meals Just For You' data={productDataThree}/>
      <Footer/>
    </Router>
  );
}

export default App;
