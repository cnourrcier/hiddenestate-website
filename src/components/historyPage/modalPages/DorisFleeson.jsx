import './DorisFleeson.css';

const Fleeson = () => {
    return (
        <div className='fleeson'>
            <section className='fleeson__article'>
                <h3>Captain Clark Gable flys with bomber squadron in WWII</h3>
                <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736195174/Hidden%20Gable%20Estate/history%20page/fleeson-heroes_syicpy.png`} alt="heroes article" />
            </section>
            <section className='fleeson__quote1'>
                <p>“Dear Doris: There are many presidents who can read your column, but it is only a happy few who have it delivered to them in person.  Sincerely, John Kennedy.”</p>
            </section>
            <section className='fleeson__main-text1'>
                <h3>Syndicated Political Columnist</h3>
                <h4>Resident: 1958-1969</h4>
                <ul className='list'>
                  <li className='list-item'>Her Syndicated column on government insider gossip was syndicated nationally to 90 newspapers for 25 years.</li>
                  <li className='list-item'>She was a champion of women's rights and led a battle for installation of rest room facilities in the Senate press gallery in the 1940s.</li>
                  <li className='list-item'>The only permanent female member of the press corps accompanying President Roosevelt on his campaign tours (1932, 1936 and 1940).</li>
                  <li className='list-item'>An intimate friend of the Franklin D. Roosevelt family, Miss Fleeson covered the terms of five presidents.</li>
                  <li className='list-item'>Married Dan Kimball in 1958</li>
                </ul>
            </section>
            <div className='row-divider'></div>
            <section className='fleeson__img1'>
                <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839277/Hidden%20Gable%20Estate/history%20page/trenches_nnwonq.jpg`} alt="trenches" />
            </section>
            <section className='fleeson__main-text2'>
                <h3>War Beat:</h3>
                <ul className='list'>
                  <li className='list-item'>When the big story became World War II, Doris Fleeson was on the job as a foreign correspondent.  In 1940 she toured with Sumner Welles as he visited European capitals on a fact-finding mission for the president.</li>
                  <li className='list-item'>She was one of the first American women on the beach after D-Day in 1944.  She also accompanied the first contingent of WACs to England in 1943 and covered the western front from Salerno t o Scotland.</li>
                  <li className='list-item'>She was under fire in Italy with Gen. Mark Clark's Army and sat out the robot-bombing in England while waiting for D-Day.</li>
                </ul>
            </section>
            <section className='fleeson__quote2'>
                <p>Fleeson said to Chicago Times in 1944: “In Italy I went ashore in an amphibious duck with an Army evacuation nurses unit and landed right on the beach.  I have never seen such heroism as those girls showed.  They would trudge up to the lines under fire to attend the wounded.”</p>
            </section>
            <section className='fleeson__img2'>
                <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839276/Hidden%20Gable%20Estate/history%20page/group_of_military_nglgyu.jpg`} alt="group of military" />
            </section>
            <section className='fleeson__img3'>
                <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404643/Hidden%20Gable%20Estate/history%20page/DorisFleeson_vfnxso.jpg`} alt="doris fleeson" />
            </section>
        </div>
    )
}

export default Fleeson;