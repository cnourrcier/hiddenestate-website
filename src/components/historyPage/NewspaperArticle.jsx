import { memo } from "react";
import "./NewspaperArticle.css";

const NewspaperArticle = () => {
    return (
        <article className="article__wrapper-column">
            <div className="space" aria-hidden="true"></div>
            <div className="wrapper-row">
                <div className="wrapper">
                    <div className="floating-box-one">
                        <div className="inner-box-one">
                            <div
                                className="inner-text-box"
                                role="complementary"
                                aria-labelledby="winter-residents-title"
                            >
                                <p
                                    className="box-title"
                                    id="winter-residents-title"
                                >
                                    Winter Residents:
                                </p>
                                <div
                                    className="boxTitleUnderline"
                                    aria-hidden="true"
                                ></div>
                                <ul className="list">
                                    <li className="listItem listItemLeft">
                                        Bing and Dixie Crosby
                                    </li>
                                    <li className="listItem listItemRight">
                                        Radio/television personalities
                                    </li>
                                    <li className="listItem listItemLeft">
                                        Sammy Davis Jr
                                    </li>
                                    <li className="listItem listItemRight">
                                        Singer, Actor, Comedian, Dancer,
                                        Musician
                                    </li>
                                    <li className="listItem listItemLeft">
                                        Maurice Chevalier
                                    </li>
                                    <li className="listItem listItemRight">
                                        French singer/actor
                                    </li>
                                    <li className="listItem listItemLeft">
                                        Bishop Joseph P. Dougherty
                                    </li>
                                    <li className="listItem listItemRight">
                                        First Bishop of Yakima, WA
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-body">
                        {/* <b>
              <span className="text-intro">Hidden Estate</span>
            </b> */}
                        <p>
                            A prime example of Spanish Colonial Revival
                            architecture and one of the oldest homes in Old Las
                            Palmas, this estate was designed by Master Architect
                            McNeal Swasey for Los Angeles fashion designer and
                            importer Mrs. Agnes Swobdi-Meade during the "Roaring
                            Twenties". Swobdi, a pioneer of the Los Angeles
                            Fashion District, was renowned for her work as an
                            importer, designer and couturière for silent film
                            stars. McNeal Swasey, an esteemed architect to
                            southern California's elite, was known for using
                            advanced technologies. The house is perfectly
                            oriented to avoid sun exposure on bedroom walls, and
                            features a fireproof and earthquake-resistant
                            structure.
                        </p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="floating-box-two" aria-hidden="true">
                        <div className="inner-box-two"></div>
                    </div>
                    <div className="text-body">
                        <p>
                            This estate's legacy is a rich tapestry, interwoven
                            with the stories of remarkable individuals whose
                            influence spanned fashion, film, government, and
                            industry. Among its distinguished occupants were
                            Clark Gable, the "King of Hollywood"; Carole
                            Lombard, one of the most celebrated actresses of
                            Classic Hollywood Cinema; Doris Fleeson, a
                            trailblazing syndicated columnist who shaped public
                            opinion across five U.S. presidencies and championed
                            women's rights; and Dan Kimball, Secretary of the
                            Navy and CEO whose leadership left a lasting impact
                            on naval policy and strategy. In the early 1950's,
                            the first Bishop of Yakima, WA visited often.
                            Statues of St. Francis from that period still exist
                            on the property. And many more …
                        </p>
                        <p className="text-highlight">
                            <i>...if these walls could talk!</i>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default memo(NewspaperArticle);
