import './SharCracraft.css';

const SharCracraftNew = () => {
    return (
        <div className='cracraft'>
            <div className='cracraft__headline'>
                <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839322/Hidden%20Gable%20Estate/history%20page/DS19760430.2.205-a1-700w_lut0b6.jpg`} alt="Shar Cracraft Home - Air of Old Palm Springs" />
            </div>
            <div className='cracraft__article-photo-self'>
                <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839323/Hidden%20Gable%20Estate/history%20page/The_Desert_Sun_1976_01_26_11.mjpg_nvytk2.jpg`} alt="The Desert Sun January 1976" />
            </div>
            <section className='cracraft__main-text'>
                <div className='cracraft__content-wrapper'>
                    <h3>Editor of Palm Springs Life Magazine</h3>
                    <h4>Resident: 1969 - 1978</h4>
                    <ul className='list'>
                    <li className='list-item'>Wrote Social column for Riverside Daily Enterprise</li>
                    <li className='list-item'>Writer for The Desert Sun and author</li>
                    <li className='list-item'>“Blue Book of the Desert”</li>
                    <li className='list-item'>Published “Personages” the “Who's Who” of the desert 1961 - 1982</li>
                    </ul>
                    <div className='cracraft__quote'>
                        <p>“This house has spread its welcome mat to many persons of note: Bing Crosby and Dixie, who rented it one winter, and Maurice Chevalier, the French charmer, did the same.  Previous owner was Dan Kimball, secretary of the Navy, and wife, Doris Fleeson.”</p>
                        <cite>- Cracraft</cite>
                    </div>
                </div>
            </section>
            <div className='cracraft__article-text'>
                <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839323/Hidden%20Gable%20Estate/history%20page/Palm_Desert_Post_1976_01_29_23_brhguf.jpg`} alt="Palm Desert Post January 1976" />
            </div>
            <div className='cracraft__article-photo-house'>
                <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839324/Hidden%20Gable%20Estate/history%20page/The_Desert_Sun_1976_04_30_37_m_ljcw6n.jpg`} alt="The Desert Sun Home & Garden April 1976" />
            </div>
            
        </div>
    )
}

export default SharCracraftNew;