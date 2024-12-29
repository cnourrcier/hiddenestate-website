import React from 'react';
import TextFlow from './TextFlow';
import './HistoryPage.css';

const HistoryItem = ({ year, event, imageSrc }) => (
  <div className="history-item">
    <div className="newspaper-clipping">
      <img src={imageSrc} alt={`${year} event`} />
    </div>
    <div className="history-content">
      <div className="history-year">{year}</div>
      <div className="history-event">{event}</div>
    </div>
  </div>
);

const HistoryPage = () => {

  const topHistoryEvents = [
    {
      year: "Roaring Twenties",
      event: "Swobdi - a pioneer of the Los Angeles Fashion District, was renowned for her work as an importer, designer and couturière for silent film stars.",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735422116/Hidden%20Gable%20Estate/history%20page/RoaringTwenties_ik20wu.jpg`
    },
    {
      year: "1939-1942",
      event: `Clark Gable and Carole Lombard - "King of Hollywood" and one of greatest actresses of Classic Hollywood Cinema`,
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735402328/Hidden%20Gable%20Estate/home%20page/Gable-Lombard-39_nv5j1q.jpg`
    },
    {
      year: "1950s-60s",
      event: "Master Architect McNeal Swasey - A Spanish Colonial Revival, one of the oldest homes in Old Las Palmas",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735402995/Hidden%20Gable%20Estate/history%20page/MasterArchitect_xk0htu.jpg`
    },
  ];

  const bottomHistoryEvents = [
    { 
      year: "", 
      event: "Desert Motif harvested from Arizona",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404267/Hidden%20Gable%20Estate/history%20page/DesertMotif_lloy8y.jpg` 
    },
    { 
      year: "1960s", 
      event: "Secretary of Navy Dan Kimball with President Harry S. Truman, and Vice Admiral Harry S. Hill at the Army-Navy baseball game at Annapolis",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404666/Hidden%20Gable%20Estate/history%20page/President_Harry_S._Truman_and_Others_at_Army-Navy_Baseball_Game_bh0bbs.jpg`
    },
    { 
      year: "1960s", 
      event: "Doris Fleeson - Syndicated columnist and women's rights champion with First Lady Elenor Roosevelt",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404643/Hidden%20Gable%20Estate/history%20page/DorisFleeson_vfnxso.jpg`
    },
    { 
      year: "", 
      event: "WWII",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404675/Hidden%20Gable%20Estate/history%20page/SHE_S_READY__TOO._BUY_WAR_BONDS_-_NARA_-_515403_92_zn1vsu.jpg`
    },
    { 
      year: "", 
      event: "Congress Woman Mary Bono with President George Bush held several political events at the Hidden Gable Estate",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404651/Hidden%20Gable%20Estate/history%20page/mary_bono_d4e5y7.jpg` 
    },
    { 
      year: "2003-2015", 
      event: "Douglas Family",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/video/upload/v1735404700/Hidden%20Gable%20Estate/history%20page/DouglasFamily2003-2015_jp36oq.mp4` 
    },
    { 
      year: "1970s", 
      event: "Shar Cracraft - Editor of Palm Springs Life Magazine",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1724950503/Hidden%20Gable%20Estate/history%20page/SharCracraft_zkyjxj.jpg` 
    },
  ];

  return (
    <div className="history">
        <h1 className='history__title'>Hidden Gable Estate</h1>
        <h2 className='history__subtitle'>222 W Chino Road (1925)</h2>

        <section className="top-history__container">
            {topHistoryEvents.map((event, index) => (
                <HistoryItem key={index} year={event.year} event={event.event} imageSrc={event.image} />
            ))}
        </section>
        <section className='middle-content__container'>
        <TextFlow />
            {/* <div className='middle-content__winter-residents'>
                <p>
                    Winter Residents:
                </p>
                <p>
                    Bing and Dixie Crosby - Radio/television personalities
                    Sammy Davis Jr - singer, actor, comedian, dancer, and musician.
                    Maurice Chevalier - French singer/actor
                    Bishop Joseph P. Dougherty - First Bishop of Yakima, WA</p>
            </div> */}
            {/* <div className='middle-content__text'>
                <p>
                    <b>Hidden Gable Estate</b> is named for the many Spanish gables hidden behind its pink walls, a style that reflects the glamour of Hollywood's Golden Age.
                </p>
                <p>
                    A Spanish Colonial Revival, one of the oldest homes in Old Las Palmas, was created by Master Architect McNeal Swasey for Los Angeles fashion designer and importer Mrs. Agnes Swobdi-Meade during the "Roaring Twenties." Swobdi, a pioneer of the Los Angeles Fashion District, was renowned for her work as an importer, designer and couturière for silent film stars.
                </p>
                <p>
                    McNeal Swasey, an esteemed architect to southern California's elite, was known for using advanced technologies. The house is perfectly oriented to avoid sun exposure on bedroom windows, features a fireproof and earthquake-resistant structure. The thick concrete walls provide thermal massing, virtually eliminating temperature fluctuations throughout the day and night. 
                </p>
                <p>
                    This estate's legacy is a rich tapestry, interwoven with the stories of remarkable individuals whose influence spanned fashion, film, government, and industry. Among its distinguished occupants were Clark Gable, the "King of Hollywood"; Carole Lombard, one of the most celebrated actresses of Classic Hollywood Cinema; Doris Fleeson, a trailblazing syndicated columnist who shaped public opinion across five U.S. presidencies and championed women's rights; and Dan Kimball, a retired Secretary of the Navy and CEO whose leadership left a lasting impact on naval policy and strategy. In the early 1950’s, the first Bishop of Yakima, WA visited often.  Statues of St. Francis from that period still exist on the property.  And many more …
                </p>
                <p>
                    <b><i>If these walls could talk!</i></b>
                </p>
            </div> */}
        </section>
          
        <section className='bottom-history__container'>
            {bottomHistoryEvents.map((event, index) => (
                <HistoryItem key={index} year={event.year} event={event.event} imageSrc={event.image} />
            ))}
        </section>
    </div>
  );
};

export default HistoryPage;