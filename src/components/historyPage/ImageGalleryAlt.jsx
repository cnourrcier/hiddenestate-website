// import React, { useState } from 'react';
// import Modal from './Modal';
// import './ImageGalleryAlt.css';

// const ImageGalleryBackup = ({ items, className }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const openModal = (item) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//   }

//   const closeModal = () => {
//     setSelectedItem(null);
//     setIsModalOpen(false);
//   }

//   return (
//       <div className={`image-gallery-wrapper ${className}`}>
//         {items.map((item, index) => ( 
//             <div 
//               key={index} 
//               className='img-wrapper' 
//               onClick={() => openModal(item)}
//             >
//               <img
//                 src={item.image}
//                 alt={item.galleryTitle}
//                 className='img-gallery-img'
//               />
//               <div className="overlay">
//                 <p>{item.galleryTitle}</p>
//                 <p>{item?.year}</p>
//               </div>
//             </div>
//         ))}
//         {isModalOpen && (
//           <Modal 
//             isOpen={isModalOpen}
//             onClose={closeModal} 
//             item={selectedItem}
//           />
//         )}
//       </div>
//   );
// };

// export default ImageGalleryBackup;