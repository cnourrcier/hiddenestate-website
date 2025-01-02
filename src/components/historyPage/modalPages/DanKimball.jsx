import './styles.css';

const DanKimball = () => (
    <div className="modal-content-container">
      <h3>US Secretary of Navy (retired)</h3>
      <h3>CEO and Board Chairman of Aerojet Corporation</h3>
      <h3>Primary residence from 1958 until his death in 1969</h3>
      <ul>
        <li>President and Board Chairman of Aerojet General Corp. during his residence, a period of explosive growth. Best known as the executive who turned Aerojet-General Corp. from a tiny General Tire subsidiary into an aerospace giant (engines, rockets, bomb fuses).</li>
        <li>Met Dorris Fleeson in Washington (1953), married in 1958.</li>
        <li>Southern California Democratic Chairman, In 1950 he toyed with the idea of running for Governor.</li>
        <li>51st US Secretary of the Navy appointed by President Truman during Korean War.  He was responsible for directing the large expansion of the Navy after the outbreak of the Korean War.</li>
        <li>Air Cadet classmate and World War 1 pilot with Jimmy Doolittle, who in 1942 lead a carrier-based raid over Tokyo and who later became an Air Force General.</li>
      </ul>
      <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735839260/Hidden%20Gable%20Estate/history%20page/time_magazine_1958_June_30_Kimbal_and_Aerojet_ylmz71.jpg`} alt="time magazine 1958 June 30 Kimbal and Aerojet" />
    </div>
  );
  
  export default DanKimball;