import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./HistoryPage.css";

// Import components
import HistoryGallery from "../components/historyPage/HistoryGallery";
import ThemeClippings from "../components/historyPage/ThemeClippings";
import NewspaperArticle from "../components/historyPage/NewspaperArticle";
import Douglas from '../components/historyPage/Douglas';

// Import modal content components
import Modal from "../components/Modal";
import DanKimball from "../components/historyPage/modalPages/DanKimball";
import Swobdi from "../components/historyPage/modalPages/Swobdi";
import GableLombard from "../components/historyPage/modalPages/GableLombard";
import DorisFleeson from "../components/historyPage/modalPages/DorisFleeson";
import WarBonds from "../components/historyPage/modalPages/WarBonds";
import MasterArchitect from "../components/historyPage/modalPages/MasterArchitect";
import SharCracraft from "../components/historyPage/modalPages/SharCracraft";

// Import data
import {
  topHistoryItems as dataTopHistoryItems,
  bottomHistoryItems as dataBottomHistoryItems,
  getHistoryItemBySlug
} from '../data/historyData';

const componentMap = {
  DanKimball,
  Swobdi,
  GableLombard,
  DorisFleeson,
  WarBonds,
  MasterArchitect,
  SharCracraft
};

const HistoryPage = () => {
  const { slug } = useParams(); // Get the slug from URL params
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const topHistoryItems = dataTopHistoryItems.map(item => ({
    ...item,
    Component: componentMap[item.Component]
  }));

  const bottomHistoryItems = dataBottomHistoryItems.map(item => ({
    ...item,
    Component: componentMap[item.Component]
  }));

  useEffect(() => {
    if (slug) {
      const item = getHistoryItemBySlug(slug);
      if (item) {
        const itemWithComponent = {
          ...item,
          Component: componentMap[item.Component]
        };
        setSelectedItem(itemWithComponent);
        setModalOpen(true);
      }
    } else {
      setModalOpen(false);
    }
  }, [slug]);

  const handleCloseModal = useCallback(() => {
    navigate('/history');
  }, [navigate]);

  const handleOpenModal = useCallback((item) => {
    navigate(`/history/${item.slug}`);
  }, [navigate]);

  return (
    <main className="history">

      <Helmet>
        <title>Celebrity Desert Hideaway</title>
      </Helmet>
      
      <h1 className="history__title">Hidden Gable Estate</h1>
      <h2 className="history__subtitle">Est. 1925</h2>
      <p className="history-discover-hint">(Click any image to learn more!)</p>

      <section className="top-history__container">
        <HistoryGallery 
          className="fun-style" 
          items={topHistoryItems} 
          onItemClick={handleOpenModal}
        />
      </section>

      <section>
        <ThemeClippings />
      </section>

      <section className="middle-content__container">
        <NewspaperArticle />
      </section>

      <section>
        <Douglas />
      </section>

      <section className="bottom-history__container">
        <HistoryGallery 
          className="grid-style" 
          items={bottomHistoryItems} 
          onItemClick={handleOpenModal}
        />
      </section>
      {modalOpen && selectedItem && (
        <Modal 
          isOpen={modalOpen}
          onClose={handleCloseModal} 
          item={selectedItem}
        />
      )}
    </main>
  );
};

export default HistoryPage;
