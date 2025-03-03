import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import GardensPage from "./pages/GardensPage";
import LuxuryVacationRental from "./pages/Rental/LuxuryVacationRental";
import EstatePage from "./pages/Galleries/EstatePage";
import EventsPage from "./pages/Galleries/EventsPage";
import MediaPage from "./pages/MediaPage";
import MissionPage from "./pages/MissionPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import ViewportDimensions from "./utils/ViewportDimensions";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="home/:slug" element={<HomePage />}/>
          </Route>
          <Route path="/history" element={<HistoryPage />}>
            <Route path=":slug" element={<HistoryPage />}/>
          </Route>
          <Route path="/gardens" element={<GardensPage />} />
          <Route path="rental/luxuryvacationrental" element={<LuxuryVacationRental />}/>
          <Route path="/galleries/estate" element={<EstatePage />} />
          <Route path="/galleries/events" element={<EventsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* <ViewportDimensions /> */}
        <Footer />
        <ScrollToTopButton />
      </Router>
    </>
  );
}

export default App;
