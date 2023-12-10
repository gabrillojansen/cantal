import React from "react";
import { CantalProvider } from "./context/CantalContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedCars } from "./components/FeaturedCars";
import { GetStarted } from "./components/GetStarted";
import { Footer } from "./components/Footer";

function App() {
  return (
    <CantalProvider>
      <Header />
      <Hero />
      <FeaturedCars />
      <GetStarted />
      <Footer />
    </CantalProvider>
  );
}

export default App;
