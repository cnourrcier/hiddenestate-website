import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./HistoryPage.css";

import ImageGallery from "../components/historyPage/ImageGallery";
import ThemeClippings from "../components/historyPage/ThemeClippings";
import NewspaperArticle from "../components/historyPage/NewspaperArticle";
import Douglas from '../components/historyPage/Douglas';

import Modal from "../components/Modal";
import DanKimball from "../components/historyPage/modalPages/DanKimball";
import Swobdi from "../components/historyPage/modalPages/Swobdi";
import GableLombard from "../components/historyPage/modalPages/GableLombard";
import DorisFleeson from "../components/historyPage/modalPages/DorisFleeson";
import WarBonds from "../components/historyPage/modalPages/WarBonds";
import MasterArchitect from "../components/historyPage/modalPages/MasterArchitect";
import SharCracraft from "../components/historyPage/modalPages/SharCracraft";


const HistoryPage = () => {
  const { slug } = useParams(); // Get the slug from URL params
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const topHistoryItems = [
    {
      galleryTitle: [
        'Dan Kimball, Secretary of Navy, with President Harry Truman',
        'Army Navy Baseball',
      ],
      slug: "dan-kimball",
      HTMLTitle: "Space Race",
      modalTitle: "Secretary of Navy Dan Kimball",
      info: "Secretary of Navy Dan Kimball with President Harry S. Truman, and Vice Admiral Harry S. Hill at the Army-Navy baseball game at Annapolis",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404666/Hidden%20Gable%20Estate/history%20page/President_Harry_S._Truman_and_Others_at_Army-Navy_Baseball_Game_bh0bbs.jpg`,
      Component: DanKimball,
    },
    {
      galleryTitle: [
        "Fashion",
        "Roaring Twenties",
      ],
      slug: 'swobdi',
      HTMLTitle: "Roaring Twenties and Fashion",
      modalTitle: "Mrs. Agnes Swobdi-Meade",
      info: "Swobdi pioneer of the Los Angeles Fashion District, was renowned for her work as an importer, designer and couturière for silent film stars.",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735422116/Hidden%20Gable%20Estate/history%20page/RoaringTwenties_ik20wu.jpg`,
      Component: Swobdi,
    },
    {
      galleryTitle: [
        'Gable & Lombard',
        'Classic Hollywood',
      ],
      slug: 'clark-gable-and-carol-lombard',
      HTMLTitle: "Classic Hollywood",
      modalTitle: "Clark Gable and Carol Lombard",
      info: `"King of Hollywood" and one of greatest actresses of Classic Hollywood Cinema`,
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735402328/Hidden%20Gable%20Estate/home%20page/Gable-Lombard-39_nv5j1q.jpg`,
      Component: GableLombard,
    },
    {
      galleryTitle: [
        'Political Columnist',
         'Doris Fleeson',
      ],
      slug: 'doris-fleeson',
      HTMLTitle: "Women Leadership and WWII",
      modalTitle: "Doris Fleeson",
      info: "Syndicated columnist and women's rights champion with First Lady Elenor Roosevelt",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735782803/Hidden%20Gable%20Estate/history%20page/DorisFleeson-heroes1_lz5aex.jpg`,
      Component: DorisFleeson,
    },
  ];

  const bottomHistoryItems = [
    {
      galleryTitle: [
        `"Buy a Bomber Campaign"`,
      ],
      slug: 'wwii',
      HTMLTitle: "WWII",
      modalTitle: "WWII",
      info: "",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404675/Hidden%20Gable%20Estate/history%20page/SHE_S_READY__TOO._BUY_WAR_BONDS_-_NARA_-_515403_92_zn1vsu.jpg`,
      additionalImage: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404682/Hidden%20Gable%20Estate/history%20page/The_Desert_Sun_1943_03_05_3_rde21d.jpg`,
      Component: WarBonds,
    },
    {
      galleryTitle: [
        "Master Architect McNeal Swasey",
      ],
      slug: 'mcneal-swasey',
      HTMLTitle: "Spanish Colonial Revival",
      modalTitle: "Master Architect McNeal Swasey",
      info: "A Spanish Colonial Revival, one of the oldest homes in Old Las Palmas",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735402995/Hidden%20Gable%20Estate/history%20page/MasterArchitect_xk0htu.jpg`,
      size: 'make-larger',
      Component: MasterArchitect,
    },
    {
      galleryTitle: [
        "Shar Cracraft",
        "Editor of Palm Springs Life Magazine",
      ],
      slug: "shar-cracraft",
      HTMLTitle: "Palm Springs Celebrity",
      modalTitle: "Shar Cracraft",
      info: "Editor of Palm Springs Life Magazine",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1724950503/Hidden%20Gable%20Estate/history%20page/SharCracraft_zkyjxj.jpg`,
      Component: SharCracraft,
    },
  ];

  const allHistoryItems = [...topHistoryItems, ...bottomHistoryItems];

  useEffect(() => {
    if (slug) {
      const item = allHistoryItems.find(item => item.slug === slug);
      if (item) {
        setSelectedItem(item);
        setModalOpen(true);
      }
    } else {
      setModalOpen(false);
    }
  }, [slug, allHistoryItems]);

  const handleCloseModal = () => {
    navigate('/history');
  };

  const handleOpenModal = (item) => {
    navigate(`/history/${item.slug}`);
  };

  return (
    <main className="history">

      <Helmet>
        <title>Celebrity Desert Hideaway</title>
      </Helmet>
      
      <h1 className="history__title">Hidden Gable Estate</h1>
      <h2 className="history__subtitle">Est. 1925</h2>
      <p className="history-discover-hint">(Click any image to learn more!)</p>

      <section className="top-history__container">
        <ImageGallery 
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
        <ImageGallery 
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
