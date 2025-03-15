import './DanKimball.css';

const DanKimball = () => (
    <div className="kimball">
          <section className="kimball__text-content">
            <h3>US Secretary of Navy, CEO and board Chairman of Aerojet Corporation</h3>
            <h4>Resident: 1958-1969</h4>
            <ul className='list'>
              <li className='list-item'>President and Board Chairman of Aerojet General Corp. during his residence, a period of explosive growth. Best known as the executive who turned Aerojet-General Corp. from a tiny General Tire subsidiary into an aerospace giant (engines, rockets, bomb fuses).</li>
              <li className='list-item'>As CEO of Aerojet, he played an instrumental role during the 1960's Space Race against Soviet Union.</li>
              <li className='list-item'>Met Dorris Fleeson in Washington (1953), married in 1958.</li>
              <li className='list-item'>Southern California Democratic Chairman, In 1950 he toyed with the idea of running for Governor.</li>
              <li className='list-item'>51st US Secretary of the Navy appointed by President Truman during Korean War.  He was responsible for directing the large expansion of the Navy after the outbreak of the Korean War.</li>
              <li className='list-item'>Air Cadet classmate and World War 1 pilot with Jimmy Doolittle, who in 1942 lead a carrier-based raid over Tokyo and who later became an Air Force General.</li>
              <li className='list-item'>Hidden Gable Estate was his primary residence from 1958 until his death in 1969.</li>
            </ul>
        </section>
        <section className="kimball__img">
          <img 
            src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1737299379/Hidden%20Gable%20Estate/history%20page/time_magazine_1958_June_30_Kimbal_and_Aerojet_ylmz71.jpg`} 
            alt="time magazine 1958 June 30 Kimbal and Aerojet" 
            loading='lazy'
            />
        </section>
    </div>
  );
  
  export default DanKimball;