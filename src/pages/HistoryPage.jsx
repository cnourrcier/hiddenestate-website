import ImageGallery from "../components/historyPage/ImageGallery";
import NewspaperArticle from "../components/historyPage/NewspaperArticle";
import ThemeClippings from "../components/historyPage/ThemeClippings";
import "./HistoryPage.css";

import DanKimball from "../components/historyPage/modalPages/DanKimball";
import DorisFleeson from "../components/historyPage/modalPages/DorisFleeson";
import MasterArchitect from "../components/historyPage/modalPages/MasterArchitect";
import WarBonds from "../components/historyPage/modalPages/WarBonds";
import SharCracraft from "../components/historyPage/modalPages/SharCracraft";
import Douglas from '../components/historyPage/modalPages/Douglas';
// import Test from "../components/historyPage/modalPages/Test";


const HistoryPage = () => {
  const topHistoryItems = [
    {
      galleryTitle: [
        'Dan Kimball with President Harry Truman',
        'Army Navy Baseball',
        // "Secretary of Navy Dan Kimball with President Harry Truman at the Army Navy baseball game",
      ],
      modalTitle: "Dan Kimball",
      info: "Secretary of Navy Dan Kimball with President Harry S. Truman, and Vice Admiral Harry S. Hill at the Army-Navy baseball game at Annapolis",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404666/Hidden%20Gable%20Estate/history%20page/President_Harry_S._Truman_and_Others_at_Army-Navy_Baseball_Game_bh0bbs.jpg`,
      // size: 'make-larger',
      Component: DanKimball,
    },
    {
      galleryTitle: [
        "Fashion",
        "Roaring Twenties",
        // "Silent Films",
      ],
      modalTitle: "Roaring Twenties, Fashion, Silent Films",
      info: "Swobdi pioneer of the Los Angeles Fashion District, was renowned for her work as an importer, designer and couturière for silent film stars.",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735422116/Hidden%20Gable%20Estate/history%20page/RoaringTwenties_ik20wu.jpg`,
      // size: "make-larger",
    },
    {
      galleryTitle: [
        'Gable & Lombard',
        'Classic Hollywood',
        // 'Clark Gable "King of Hollywood"',
        // 'Carol Lombard "Greatest Actress of classic Hollywood cinema"',
      ],
      modalTitle: "Clark Gable and Carol Lombard",
      info: `"King of Hollywood" and one of greatest actresses of Classic Hollywood Cinema`,
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735402328/Hidden%20Gable%20Estate/home%20page/Gable-Lombard-39_nv5j1q.jpg`,
    },
    {
      galleryTitle: [
        'Political Columnist',
         'Doris Fleeson',
        // "Doris Fleeson, syndicated political columnist and women's rights champion",
      ],
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
        "Shar Cracraft",
        "Editor of Palm Springs Life Magazine",
      ],
      modalTitle: "Shar Cracraft",
      info: "Editor of Palm Springs Life Magazine",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1724950503/Hidden%20Gable%20Estate/history%20page/SharCracraft_zkyjxj.jpg`,
      Component: SharCracraft,
    },
    // {
    //   year: "",
    //   galleryTitle: [
    //     "Douglas Family",
    //   ],
    //   modalTitle: "Douglas Family",
    //   info: "Douglas Family 2003-2015",
    //   image: `https://res.cloudinary.com/${
    //     import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
    //   }/image/upload/v1735579854/Hidden%20Gable%20Estate/history%20page/DouglasFamily_pegxqx.png`,
    //   video: `https://res.cloudinary.com/${
    //     import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
    //   }/video/upload/v1735404700/Hidden%20Gable%20Estate/history%20page/DouglasFamily2003-2015_jp36oq.mp4`,
    //   Component: Douglas,
    // },
    // {
    //   galleryTitle: [
    //     "Desert Motif",
    //   ],
    //   modalTitle: "Desert Motif",
    //   info: "Desert Motif harvested from Arizona",
    //   image: `https://res.cloudinary.com/${
    //     import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
    //   }/image/upload/v1735404267/Hidden%20Gable%20Estate/history%20page/DesertMotif_lloy8y.jpg`,
    //   size: 'make-larger',
    // },
    {
      galleryTitle: [
        "WWII",
      ],
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
        "Political Fundraisers",
      ],
      modalTitle: "Political Fundraisers",
      info: "Congress Woman Mary Bono with President George Bush held several political events at the Hidden Gable Estate",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404651/Hidden%20Gable%20Estate/history%20page/mary_bono_d4e5y7.jpg`,
    },
    {
      galleryTitle: [
        "Master Architect",
      ],
      modalTitle: "Master Architect McNeal Swasey",
      info: "A Spanish Colonial Revival, one of the oldest homes in Old Las Palmas",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735402995/Hidden%20Gable%20Estate/history%20page/MasterArchitect_xk0htu.jpg`,
      size: 'make-larger',
      Component: MasterArchitect,
    },
    // {
    //   galleryTitle: [
    //     "Test",
    //   ],
    //   modalTitle: "Test",
    //   info: "Test",
    //   image: `https://res.cloudinary.com/${
    //     import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
    //   }/image/upload/v1735402995/Hidden%20Gable%20Estate/history%20page/MasterArchitect_xk0htu.jpg`,
    //   size: 'make-larger',
    //   Component: Test,
    // },
  ];

  return (
    <div className="history">
      <h1 className="history__title">Hidden Gable Estate</h1>
      <h2 className="history__subtitle">Est. 1925</h2>
      <p className="history-discover-hint">(Click any image to learn more!)</p>

      <section className="top-history__container">
        <ImageGallery className="fun-style" items={topHistoryItems} />
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
        <ImageGallery className="grid-style" items={bottomHistoryItems} />
      </section>
    </div>
  );
};

export default HistoryPage;
