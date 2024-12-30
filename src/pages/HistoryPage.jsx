import React, { useState } from 'react';
import TextFlow from '../components/TextFlow';
import Modal from '../components/Modal';
import './HistoryPage.css';

const HistoryItem = ({ year, title, imageSrc, additionalImageSrc, videoSrc, info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const checkImageOrientation = (e) => {
    setIsLandscape(e.target.naturalWidth > e.target.naturalHeight);
  };

  return (
    <>
      <div className="history-item" onClick={() => setIsModalOpen(true)}>
        <div className={`newspaper-clipping ${isLandscape ? 'landscape' : ''}`}>
          <img 
            src={imageSrc} 
            alt={`${title}`}
            onLoad={checkImageOrientation}
          />
        </div>
        <div className="history-content">
          <div className="history-content-title">{title}</div>
          {year && <div className="history-content-title">{year}</div>}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={imageSrc}
        additionalImage={additionalImageSrc}
        video={videoSrc}
        title={title}
        info={info}
      />
    </>
  )
};

const HistoryPage = () => {

  const topHistoryItems = [
    {
      year: "",
      title: "Roaring Twenties",
      info: "Swobdi pioneer of the Los Angeles Fashion District, was renowned for her work as an importer, designer and couturière for silent film stars.",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735422116/Hidden%20Gable%20Estate/history%20page/RoaringTwenties_ik20wu.jpg`
    },
    {
      year: "1939-1942",
      title: "Clark Gable and Carole Lombard",
      info: `"King of Hollywood" and one of greatest actresses of Classic Hollywood Cinema`,
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735402328/Hidden%20Gable%20Estate/home%20page/Gable-Lombard-39_nv5j1q.jpg`
    },
    {
      year: "",
      title: "Master Architect McNeal Swasey",
      info: "A Spanish Colonial Revival, one of the oldest homes in Old Las Palmas",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735402995/Hidden%20Gable%20Estate/history%20page/MasterArchitect_xk0htu.jpg`
    },
  ];

  const bottomHistoryItems = [
    { 
      year: "", 
      title: "Desert Motif",
      info: "Desert Motif harvested from Arizona",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404267/Hidden%20Gable%20Estate/history%20page/DesertMotif_lloy8y.jpg` 
    },
    { 
      year: "", 
      title: "Dan Kimball",
      info: "Secretary of Navy Dan Kimball with President Harry S. Truman, and Vice Admiral Harry S. Hill at the Army-Navy baseball game at Annapolis",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404666/Hidden%20Gable%20Estate/history%20page/President_Harry_S._Truman_and_Others_at_Army-Navy_Baseball_Game_bh0bbs.jpg`
    },
    { 
      year: "",
      title: "Doris Fleeson",
      info: "Syndicated columnist and women's rights champion with First Lady Elenor Roosevelt",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404643/Hidden%20Gable%20Estate/history%20page/DorisFleeson_vfnxso.jpg`
    },
    { 
      year: "",
      title: "WWII",
      info: "",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404675/Hidden%20Gable%20Estate/history%20page/SHE_S_READY__TOO._BUY_WAR_BONDS_-_NARA_-_515403_92_zn1vsu.jpg`,
      additionalImage: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404682/Hidden%20Gable%20Estate/history%20page/The_Desert_Sun_1943_03_05_3_rde21d.jpg`
    },
    { 
      year: "", 
      title: "Political Fundraisers",
      info: "Congress Woman Mary Bono with President George Bush held several political events at the Hidden Gable Estate",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404651/Hidden%20Gable%20Estate/history%20page/mary_bono_d4e5y7.jpg` 
    },
    { 
      year: "",
      title: "Douglas Family",
      info: "Douglas Family 2003-2015",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735579854/Hidden%20Gable%20Estate/history%20page/DouglasFamily_pegxqx.png`,
      video: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/video/upload/v1735404700/Hidden%20Gable%20Estate/history%20page/DouglasFamily2003-2015_jp36oq.mp4`, 
    },
    { 
      year: "", 
      title: "Shar Cracraft",
      info: "Editor of Palm Springs Life Magazine",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1724950503/Hidden%20Gable%20Estate/history%20page/SharCracraft_zkyjxj.jpg` 
    },
  ];

  return (
    <div className="history">
        <h1 className='history__title'>Hidden Gable Estate</h1>
        <h2 className='history__subtitle'>222 W Chino Road (1925)</h2>

        <section className="top-history__container">
            {topHistoryItems.map((item, index) => (
                <HistoryItem 
                  key={index} 
                  year={item.year} 
                  title={item.title}
                  info={item.info}
                  imageSrc={item.image}
                  additionalImageSrc={item.additionalImage} 
                  videoSrc={item.video}
                />
            ))}
        </section>

        <section className='middle-content__container'>
        <TextFlow />
        </section>
          
        <section className='bottom-history__container'>
            {bottomHistoryItems.map((item, index) => (
                <HistoryItem 
                  key={index} 
                  year={item.year} 
                  title={item.title}
                  info={item.info}
                  imageSrc={item.image} 
                  additionalImageSrc={item.additionalImage} 
                  videoSrc={item.video}
                />            
            ))}
        </section>
    </div>
  );
};

export default HistoryPage;