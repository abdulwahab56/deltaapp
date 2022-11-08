import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import Signup from "./pages/Signup";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="pricing" element={<PricingPage />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
