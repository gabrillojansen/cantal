import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CantalProvider } from "./context/CantalContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ExploreCars } from "./pages/ExploreCars";
import { Home } from "./pages/Home";
import CarDetails from "./pages/CarDetails";

function App() {
  return (
    <CantalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/explore-cars' element={<ExploreCars />}/>
          <Route path='/car-details' element={<CarDetails />}/>
        </Routes>
        <Footer />
      </Router>
    </CantalProvider>
  );
}

export default App;
