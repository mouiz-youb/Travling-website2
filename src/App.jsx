import React from "react";
import Navbar from "./Component/Navbar";
import HomeX from "./Component/HomeX";
import PubSection from "./Component/PubSection";
import SliderOne from "./Component/SliderOne";
import Explore from "./Component/Explore";
import Travelsection from "./Component/Travelsection";
import OfferSection from "./Component/OfferSection";
import TrustSection from "./Component/TrustSection";
import Subscribe from "./Component/Subscribe";
import Footer from "./Component/Footer";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeX />
      <PubSection />
      <SliderOne />
      <Explore />
      <Travelsection />
      <OfferSection />
      <TrustSection />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
