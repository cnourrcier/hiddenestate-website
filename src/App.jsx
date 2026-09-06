import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import ScrollToTop from "./components/common/ScrollToTop";
import ViewportDimensions from "./utils/ViewportDimensions";
import Analytics from "./utils/Analytics";
import LoadingFallback from "./components/common/LoadingFallback";
import { ModalProvider } from "./context/ModalContext";

// Lazy load all page components
const HomePage = lazy(() => import("./pages/HomePage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));
const GardensPage = lazy(() => import("./pages/GardensPage"));
const CorporateEvents = lazy(() => import("./pages/rental/CorporateEvents"));
const PrivateEvents = lazy(() => import("./pages/rental/PrivateEvents"));
const Weddings = lazy(() => import("./pages/rental/Weddings"));
const LuxuryVacationRental = lazy(
    () => import("./pages/rental/LuxuryVacationRental")
);
const HistoricTours = lazy(() => import("./pages/rental/HistoricTours"));
const DinnerParties = lazy(() => import("./pages/rental/DinnerParties"));
const FilmLocation = lazy(() => import("./pages/rental/FilmLocation"));
const EstatePage = lazy(() => import("./pages/galleries/EstatePage"));
const EventsPage = lazy(() => import("./pages/galleries/EventsPage"));
const FoundationForPsusd2025 = lazy(
    () => import("./pages/galleries/FoundationForPsusd2025")
);
const MediaPage = lazy(() => import("./pages/MediaPage"));
const MissionPage = lazy(() => import("./pages/MissionPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ComingSoonPage = lazy(() => import("./pages/ComingSoonPage"));

function App() {
    return (
        <Router>
            <Analytics />
            <ScrollToTop />
            <ModalProvider>
                <Header />
                <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="home/:slug" element={<HomePage />} />
                        <Route path="/history" element={<HistoryPage />} />
                        <Route
                            path="/history/:slug"
                            element={<HistoryPage />}
                        />
                        <Route path="/gardens" element={<GardensPage />} />
                        <Route
                            path="/corporate-events"
                            element={<CorporateEvents />}
                        />
                        <Route
                            path="/private-events"
                            element={<PrivateEvents />}
                        />
                        <Route
                            path="/palm-springs-weddings"
                            element={<Weddings />}
                        />
                        <Route
                            path="/luxury-vacation-rental"
                            element={<LuxuryVacationRental />}
                        />
                        <Route
                            path="/historic-tours"
                            element={<HistoricTours />}
                        />
                        <Route
                            path="rental/dinnerparties"
                            element={<DinnerParties />}
                        />
                        <Route
                            path="/photo-film-location"
                            element={<FilmLocation />}
                        />
                        <Route
                            path="/celebrations"
                            element={<ComingSoonPage title="Celebrations" />}
                        />
                        <Route
                            path="/nonprofit-charity-events"
                            element={
                                <ComingSoonPage title="Nonprofit and Charity Events" />
                            }
                        />
                        <Route
                            path="/galleries/estate"
                            element={<EstatePage />}
                        />
                        <Route
                            path="/galleries/events"
                            element={<EventsPage />}
                        />
                        <Route
                            path="/galleries/events/foundation-for-psusd-2025"
                            element={<FoundationForPsusd2025 />}
                        />
                        <Route path="/media" element={<MediaPage />} />
                        <Route path="/mission" element={<MissionPage />} />
                        <Route path="/inquire" element={<ContactPage />} />
                    </Routes>
                </Suspense>
                {import.meta.env.VITE_ENV === "development" && (
                    <ViewportDimensions />
                )}
                <Footer />
                <ScrollToTopButton />
            </ModalProvider>
        </Router>
    );
}

export default App;
