import ImageCarousel from '../../gardensPage/ImageCarousel';
import './Swobdi.css';

const Swobdi = () => {

    const images = [
        { id: 1, url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-fashions_j2in6j.jpg' },
        { id: 2, url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874700/Hidden%20Gable%20Estate/history%20page/swobdi-with-glove_hwp2tj.jpg' },
        { id: 3, url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/stranger-within-our-gates_zghaht.jpg' },
        { id: 4, url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-feather-hat_stddkw.jpg' },
        { id: 5, url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-chinese-robe_ypeydp.jpg' },
        { id: 6, url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874698/Hidden%20Gable%20Estate/history%20page/swobdi-25-years-in-business_uitt4o.jpg' },
        { id: 7, url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/LA-fashion-show_a7ix14.jpg' },
        { id: 8, url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-illustration_du4jwq.jpg' },
        { id: 9, url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874700/Hidden%20Gable%20Estate/history%20page/swobdi-on-display-for-your-approval_df1vj1.jpg' },
        { id: 10, url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-large-hat_djrnsn.jpg' },
    ]

    return (
        <div className='swobdi'>
            <div className='swobdi__text-content'>
                <header>
                    <h3>“Roaring Twenties, Liberated Women, and Flappers"</h3>
                </header>
                <ul>
                    <li className='list-item'>
                        Mrs Agnes Swobdi is credited with pioneering the Los Angeles Fashion District with her original designs and exclusive imports.
                    </li>
                    <li className='list-item'>
                        As an importer, curating her latest collection featured in her many shops, she made numerous trans-Atlantic crossings visiting all of Europe, traveled extensively throughout Asia on the Orient Express and special trips to Japan, Australia and Hawaii.
                    </li>
                    <li className='list-item'>
                        Her most favorite places to visit included the ruins of Rome, the temples of Asia, the lagoons of Mandalay, and the pretty gardens of Japan.
                    </li>
                    <li className='list-item'>
                        Her most favorite places to visit included the ruins of Rome, the temples of Asia, the lagoons of Mandalay, and the pretty gardens of Japan.
                    </li>
                    <li className='list-item'>
                        Her dresses and hats were worn by Silent Film actresses in the 1920s.
                    </li>
                    <li className='list-item'>
                        Many of her fashions were featured in the 1924 film “Try and forget it” staring Bryant Washburn and directed by Cullen Tate. 
                    </li>
                </ul>
            </div>
            <div className='swobdi__carousel-container'>
                <p>Click on any image to enlarge!</p>
                <ImageCarousel images={images} className='swobdi-carousel'/>
            </div>
        </div>
    )
}

export default Swobdi;


