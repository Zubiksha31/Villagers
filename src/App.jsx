import React from "react";
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from "./pages/Home"
import Materials from "./pages/Materials"
import Contactinfo from "./pages/Contactinfo";
import ProductView from "./pages/ProductView";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materials" element={<Materials/> } />
        <Route path="/contact" element={ <Contactinfo/> } />
        <Route path="/materials/:id" element={<ProductView />} />
      </Routes>
    </div>
  );
};

export default App;
