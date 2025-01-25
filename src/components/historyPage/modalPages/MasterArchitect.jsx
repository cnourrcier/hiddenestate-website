import './MasterArchitect.css';

const MasterAchitect = () => (
    <div className='swasey'>

        <div className="swasey__text-content ">
            <ul className='swasey-list'>
              <li className='list-item'>Swasey's early works included the Ambassador Hotel home of the famous Coconut Grove and Huntington Library, working under Principal Architect Muron Hunt.</li>
              <li className='list-item'>He was the chief architect of Lake Arrowhead village and surrounding 50,000 acres.</li>
              <li className='list-item'>Architect to the rich and famous, e.g. Lionel Barrymore Home in Beverly Hills in 1925, Judge John F McCarthy home in Los Angeles 1926, and Henry S McKee Mansion 1927</li>
              <li className='list-item'>Smith, Stanley W., Building, Los Angeles, CA, 1924 aka Peerless Motor Car Co. in Los Angeles</li>
              <li className='list-item'>St. Regis Hotel 1254 w 6th, 1925 and Hotel Constance, Pasadena 1926</li>
              <li className='list-item'>Twentieth Century Fox Films Sound Studio, West Los Angeles</li>
            </ul>      
        </div>

        <div className='dw-clstr--hrz'>

          <div className='dw-clstr__sgmnt'>
            <div className="swasey__img dw-clstr__sgmnt ">
              <img className="dw-pnl__cntnt" src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719349/Hidden%20Gable%20Estate/home%20page/5734_dy1q44.jpg`} alt="Master Architect" />
            </div>
            <div className="swasey__img dw-clstr__sgmnt .dw-clstr__sgmnt--qrt">
              <img className="dw-pnl__cntnt" src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839306/Hidden%20Gable%20Estate/history%20page/The_Los_Angeles_Times_1925_10_04_108_kib7nn.jpg`} alt="barrymores build in beverly hills" />
            </div>
          </div>

          <div className='dw-clstr__sgmnt'>
            <div className="swasey__img dw-clstr__sgmnt ">
              <img className="dw-pnl__cntnt" src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736186848/Hidden%20Gable%20Estate/history%20page/Los_Angeles_Evening_Citizen_News_1924_06_25_15_76_g1rjcr.png`} alt="hollywood daily citizen" />
            </div>
          </div>

          <div className='dw-clstr__sgmnt'>
            <div className="swasey__img dw-clstr__sgmnt .dw-clstr__sgmnt--hlf">
              <img className="dw-pnl__cntnt" src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839305/Hidden%20Gable%20Estate/history%20page/Los_Angeles_Times_1931_April_6_pg_74_ib2nin.png`} alt="Los Angeles Times 1931 April 6 pg 74 " />
            </div>
            <div className="swasey__img dw-clstr__sgmnt .dw-clstr__sgmnt--hlf">
              <img className="dw-pnl__cntnt" src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839307/Hidden%20Gable%20Estate/history%20page/The_Los_Angeles_Times_1925_10_12_6_vpok9s.jpg`} alt="Los Angeles Times 1925 October" />
            </div>
          </div>

        </div>

    </div>
  );
  
  export default MasterAchitect;
