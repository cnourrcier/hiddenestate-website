import { Helmet } from "react-helmet-async";
import "./HistoryPage.css";

// Import components
import HistoryGallery from "../components/historyPage/HistoryGallery";
import ThemeClippings from "../components/historyPage/ThemeClippings";
import NewspaperArticle from "../components/historyPage/NewspaperArticle";
import Douglas from '../components/historyPage/Douglas';

// Import context
import { useModal } from "../context/ModalContext";

// Import data
import {
  topHistoryItems,
  bottomHistoryItems,
} from '../data/modalData';

const HistoryPage = () => {
  const{ handleOpenModal } = useModal();

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
          onItemClick={(item) => handleOpenModal(item.slug)}
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
          onItemClick={(item) => handleOpenModal(item.slug)}
        />
      </section>
    </main>
  );
};

export default HistoryPage;
