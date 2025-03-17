import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ViewportDimensions from "./utils/ViewportDimensions";
import Analytics from "./utils/Analytics";
import LoadingFallback from "./components/LoadingFallback";
import { ModalProvider } from "./context/ModalContext";

// Lazy load all page components
const HomePage = lazy(() => import("./pages/HomePage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));
const GardensPage = lazy(() => import("./pages/GardensPage"));
const CorporateEvents = lazy(() => import("./pages/Rental/CorporateEvents"));
const PrivateEvents = lazy(() => import("./pages/Rental/PrivateEvents"));
const Weddings = lazy(() => import("./pages/Rental/Weddings"));
const LuxuryVacationRental = lazy(() => import("./pages/Rental/LuxuryVacationRental"));
const PrivateTours = lazy(() => import("./pages/Rental/PrivateTours"));
const DinnerParties = lazy(() => import("./pages/Rental/DinnerParties"));
const FilmLocation = lazy(() => import("./pages/Rental/FilmLocation"));
const EstatePage = lazy(() => import("./pages/Galleries/EstatePage"));
const EventsPage = lazy(() => import("./pages/Galleries/EventsPage"));
const MediaPage = lazy(() => import("./pages/MediaPage"));
const MissionPage = lazy(() => import("./pages/MissionPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <Router>
      <Analytics />
      <ModalProvider>
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home/:slug" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/history/:slug" element={<HistoryPage />} />
            <Route path="/gardens" element={<GardensPage />} />
            <Route path="rental/corporateevents" element={<CorporateEvents />} />
            <Route path="rental/privateevents" element={<PrivateEvents />} />
            <Route path="rental/weddings" element={<Weddings />} />
            <Route path="rental/luxuryvacationrental" element={<LuxuryVacationRental />} />
            <Route path="rental/privatetours" element={<PrivateTours />} />
            <Route path="rental/dinnerparties" element={<DinnerParties />} />
            <Route path="rental/filmlocation" element={<FilmLocation />} />
            <Route path="/galleries/estate" element={<EstatePage />} />
            <Route path="/galleries/events" element={<EventsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        {import.meta.env.VITE_ENV === 'development' && <ViewportDimensions />}
        <Footer />
        <ScrollToTopButton />
      </ModalProvider>
    </Router>
  );
}

export default App;