import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import GalleryPage from "./pages/GalleryPage";
import MissionPage from "./pages/MissionPage";
import ContactPage from "./pages/ContactPage";
// import Booking from './components/Booking';
import Footer from "./components/Footer";
import ViewportDimensions from "./utils/ViewportDimensions";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* <Booking /> */}
        {/* <ViewportDimensions /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
