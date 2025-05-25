import { Helmet } from "react-helmet-async";
import HistoryGallery from "../components/historyPage/HistoryGallery";
import ThemeClippings from "../components/historyPage/ThemeClippings";
import NewspaperArticle from "../components/historyPage/NewspaperArticle";
import Douglas from "../components/historyPage/Douglas";
import { useModal } from "../context/ModalContext";
import { topHistoryImages, bottomHistoryImages } from "../data/imagesData";
import "./HistoryPage.css";

const HistoryPage = () => {
    const { openModal } = useModal();

    return (
        <main className="history">
            <Helmet>
                <title>Celebrity Desert Hideaway</title>
            </Helmet>

            <h1 className="history__title">Hidden Estate</h1>
            <h2 className="history__subtitle">Est. 1925</h2>
            <p className="history-discover-hint">
                (Click any image to learn more!)
            </p>

            <section className="top-history__container">
                <HistoryGallery
                    className="fun-style"
                    items={topHistoryImages}
                    onItemClick={openModal}
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
                    items={bottomHistoryImages}
                    onItemClick={openModal}
                />
            </section>
        </main>
    );
};

export default HistoryPage;
