import './WarBonds.css';

const WarBonds = () => (
    <div className='war-bonds'>

      <div className="dw">


      <div className="dw-pnl">
          <div className="dw-pnl__cntnt">
            <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839371/Hidden%20Gable%20Estate/history%20page/The_Desert_Sun_1943_03_05_3_yxqinr.jpg`} alt="The Desert Sun March 5 1943" />
            <p>Desert Sun March 5, 1943</p>
          </div>
        </div>

        <div className="dw-pnl">
          <div className="dw-pnl__cntnt text-cntnt">
            <h2>War Bonds</h2>
            <h3>Ernest Alschuler's winter home in 1943 (rented)</h3>
            <ul className='list'>
              <li className='list-item'>President Sentinel Radio Company, very active in local Palm Springs community.</li>
              <li className='list-item'>Credited with developing the first portable television.</li>
            </ul>
          </div>
        </div>

        <div className="dw-pnl">
          <div className="dw-pnl__cntnt">
            <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839371/Hidden%20Gable%20Estate/history%20page/The_Desert_Sun_1948_12_21_8_gwjdiv.jpg`} alt="The Desert Sun December 21 1948" />
            <p>Desert Sun Dec 21, 1948</p>
          </div>
        </div>

      </div>
    </div>
  );
  
  export default WarBonds;