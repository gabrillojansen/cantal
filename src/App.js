import React from "react";
import { CantalProvider } from "./context/CantalContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedCars } from "./components/FeaturedCars";

function App() {
  return (
    <CantalProvider>
      <Header />
      <Hero />
      <FeaturedCars />
    </CantalProvider>
  );
}

export default App;
