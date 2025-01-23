import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import GardensPage from "./pages/GardensPage";
import GalleryPage from "./pages/GalleryPage";
import MissionPage from "./pages/MissionPage";
import ContactPage from "./pages/ContactPage";
import UnderConstruction from "./pages/UnderConstructionPage";
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
          <Route path="/gardens" element={<GardensPage />} />
          <Route path="/gallery" element={<UnderConstruction />} />
          <Route path="/media" element={<UnderConstruction />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* <ViewportDimensions /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
