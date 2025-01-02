import ImageGallery from "../components/ImageGallery";
import NewspaperArticle from "../components/NewspaperArticle";
import "./HistoryPage.css";

const HistoryPage = () => {
  const topHistoryItems = [
    {
      year: "",
      galleryTitle: "Roaring Twenties",
      galleryTitle2: "Fashion",
      galleryTitle3: "Silent Films",
      modalTitle: "Roaring Twenties, Fashion, Silent Films",
      info: "Swobdi pioneer of the Los Angeles Fashion District, was renowned for her work as an importer, designer and couturière for silent film stars.",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735422116/Hidden%20Gable%20Estate/history%20page/RoaringTwenties_ik20wu.jpg`,
      size: "make-larger",
    },
    {
      year: "",
      galleryTitle: 'Clark Gable "King of Hollywood"',
      galleryTitle2: 'Carol Lombard "Greatest Actress of classic Hollywood cinema"',
      modalTitle: "Gable & Lombard 1939-1942",
      info: `"King of Hollywood" and one of greatest actresses of Classic Hollywood Cinema`,
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735402328/Hidden%20Gable%20Estate/home%20page/Gable-Lombard-39_nv5j1q.jpg`,
    },
    {
      year: "",
      galleryTitle: "Secretary of Navy Dan Kimball with President Harry Truman at the Army Navy baseball game",
      modalTitle: "Secretary of Navy Dan Kimball",
      info: "Secretary of Navy Dan Kimball with President Harry S. Truman, and Vice Admiral Harry S. Hill at the Army-Navy baseball game at Annapolis",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404666/Hidden%20Gable%20Estate/history%20page/President_Harry_S._Truman_and_Others_at_Army-Navy_Baseball_Game_bh0bbs.jpg`,
      size: 'make-larger',
    },
    {
      year: "",
      galleryTitle: "Doris Fleeson, syndicated political columnist and women's rights champion",
      modalTitle: "Doris Fleeson",
      info: "Syndicated columnist and women's rights champion with First Lady Elenor Roosevelt",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735782803/Hidden%20Gable%20Estate/history%20page/DorisFleeson-heroes1_lz5aex.jpg`,
    },
  ];

  const bottomHistoryItems = [
    {
      year: "",
      galleryTitle: "Master Architect",
      modalTitle: "Master Architect McNeal Swasey",
      info: "A Spanish Colonial Revival, one of the oldest homes in Old Las Palmas",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735402995/Hidden%20Gable%20Estate/history%20page/MasterArchitect_xk0htu.jpg`,
      size: 'make-larger',
    },
    {
      year: "",
      galleryTitle: "Desert Motif",
      modalTitle: "Desert Motif",
      info: "Desert Motif harvested from Arizona",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404267/Hidden%20Gable%20Estate/history%20page/DesertMotif_lloy8y.jpg`,
      size: 'make-larger',
    },
    {
      year: "",
      galleryTitle: "WWII",
      modalTitle: "WWII",
      info: "",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404675/Hidden%20Gable%20Estate/history%20page/SHE_S_READY__TOO._BUY_WAR_BONDS_-_NARA_-_515403_92_zn1vsu.jpg`,
      additionalImage: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404682/Hidden%20Gable%20Estate/history%20page/The_Desert_Sun_1943_03_05_3_rde21d.jpg`,
    },
    {
      year: "",
      galleryTitle: "Political Fundraisers",
      modalTitle: "Political Fundraisers",
      info: "Congress Woman Mary Bono with President George Bush held several political events at the Hidden Gable Estate",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404651/Hidden%20Gable%20Estate/history%20page/mary_bono_d4e5y7.jpg`,
    },
    {
      year: "2003-2015",
      galleryTitle: "Douglas Family",
      modalTitle: "Douglas Family",
      info: "Douglas Family 2003-2015",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735579854/Hidden%20Gable%20Estate/history%20page/DouglasFamily_pegxqx.png`,
      video: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/video/upload/v1735404700/Hidden%20Gable%20Estate/history%20page/DouglasFamily2003-2015_jp36oq.mp4`,
    },
    {
      year: "",
      galleryTitle: "Shar Cracraft",
      modalTitle: "Shar Cracraft",
      info: "Editor of Palm Springs Life Magazine",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1724950503/Hidden%20Gable%20Estate/history%20page/SharCracraft_zkyjxj.jpg`,
    },
  ];

  return (
    <div className="history">
      <h1 className="history__title">Hidden Gable Estate</h1>
      <h2 className="history__subtitle">222 W Chino Road (1925)</h2>

      <section className="top-history__container">
        <ImageGallery className="top-grid" items={topHistoryItems} />
      </section>

      <section className="middle-content__container">
        <NewspaperArticle />
      </section>

      <section className="bottom-history__container">
        <ImageGallery className="bottom-grid" items={bottomHistoryItems} />
      </section>
    </div>
  );
};

export default HistoryPage;
