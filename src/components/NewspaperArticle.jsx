import "./NewspaperArticle.css";

const NewspaperArticle = () => {
  return (
    <>
      <div className="wrapper-column">
        <div className="space"></div>
        <div className="wrapper-row">
          <div className="wrapper">
            <div className="floating-box-one">
              <div className="inner-box-one">
                <div className="inner-text-box">
                  <p className="box-title">
                    Winter Residents:
                  </p>
                  <div className="boxTitleUnderline"></div>
                    <ul className="list">
                      <li className="listItem listItemLeft">Bing and Dixie Crosby</li>
                      <li className="listItem listItemRight">Radio/television personalities</li>
                      <li className="listItem listItemLeft">Sammy Davis Jr</li>
                      <li className="listItem listItemRight">Singer, Actor, Comedian, Dancer, Musician</li>
                      <li className="listItem listItemLeft">Maurice Chevalier</li>
                      <li className="listItem listItemRight">French singer/actor</li>
                      <li className="listItem listItemLeft">Bishop Joseph P. Dougherty</li>
                      <li className="listItem listItemRight">First Bishop of Yakima, WA</li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="text-body">
              <b>
                <span className="text-intro">Hidden Gable Estate</span>
              </b>
              <p>
                is named for the many Spanish gables hidden behind its pink
                walls, a style that reflects the glamour of Hollywood's Golden
                Age. A Spanish Colonial Revival, one of the oldest homes in Old
                Las Palmas, was created by Master Architect McNeal Swasey for
                Los Angeles fashion designer and importer Mrs. Agnes
                Swobdi-Meade during the "Roaring Twenties." Swobdi, a pioneer of
                the Los Angeles Fashion District, was renowned for her work as
                an importer, designer and couturière for silent film stars.
                McNeal Swasey, an esteemed architect to southern California's
                elite, was known for using advanced technologies. The house is
                perfectly oriented to avoid sun exposure on bedroom windows,
                features a fireproof and earthquake-resistant structure.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="floating-box-two">
              <div className="inner-box-two"></div>
            </div>
            <div className="text-body">
              <p>
                This estate's legacy is a rich tapestry, interwoven with the
                stories of remarkable individuals whose influence spanned
                fashion, film, government, and industry. Among its distinguished
                occupants were Clark Gable, the "King of Hollywood"; Carole
                Lombard, one of the most celebrated actresses of Classic
                Hollywood Cinema; Doris Fleeson, a trailblazing syndicated
                columnist who shaped public opinion across five U.S.
                presidencies and championed women's rights; and Dan Kimball, a
                retired Secretary of the Navy and CEO whose leadership left a
                lasting impact on naval policy and strategy. In the early
                1950's, the first Bishop of Yakima, WA visited often. Statues of
                St. Francis from that period still exist on the property. And
                many more …
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewspaperArticle;
