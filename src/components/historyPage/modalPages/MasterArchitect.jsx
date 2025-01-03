import './MasterArchitect.css';

const MasterAchitect = () => (
    <div className='swasey-modal-container'>
      <ul className='swasey-text-content'>
        <li>Swasey's early works included the Ambassador Hotel home of the famous Coconut Grove and Huntington Library, working under Principal Architect Muron Hunt.</li>
        <li>He was the chief architect of Lake Arrowhead village and surrounding 50,000 acres.</li>
        <li>Architect to the rich and famous, e.g. Lionel Barrymore Home in Beverly Hills in 1925, Judge John F McCarthy home in Los Angeles 1926, and Henry S McKee Mansion 1927</li>
        <li>Smith, Stanley W., Building, Los Angeles, CA, 1924 aka Peerless Motor Car Co. in Los Angeles</li>
        <li>St. Regis Hotel 1254 w 6th, 1925 and Hotel Constance, Pasadena 1926</li>
        <li>Twentieth Century Fox Films Sound Studio, West Los Angeles</li>
      </ul>
      <div className='swasey-image-container'>
        <div className='swasey-image-first-row'>
          <img className='image swasey-img1' src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719349/Hidden%20Gable%20Estate/home%20page/5734_dy1q44.jpg`} alt="Master Architect" />
          <img className='image swasey-img2' src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839306/Hidden%20Gable%20Estate/history%20page/The_Los_Angeles_Times_1925_10_04_108_kib7nn.jpg`} alt="barrymores build in beverly hills" />
        </div>
        <img className='image swasey-img3' src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839305/Hidden%20Gable%20Estate/history%20page/Los_Angeles_Evening_Citizen_News_1924_06_25_15_76_g1rjcr.jpg`} alt="hollywood daily citizen" />
        <div className='swasey-image-third-row'>
          <img className='image swasey-img4' src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839305/Hidden%20Gable%20Estate/history%20page/Los_Angeles_Times_1931_April_6_pg_74_ib2nin.png`} alt="Los Angeles Times 1931 April 6 pg 74 " />
          <img className='image swasey-img5' src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839307/Hidden%20Gable%20Estate/history%20page/The_Los_Angeles_Times_1925_10_12_6_vpok9s.jpg`} alt="Los Angeles Times 1925 October" />
        </div>
      </div>
    </div>
  );
  
  export default MasterAchitect;