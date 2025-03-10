// History data for the History page
// This file centralizes all history-related data in one place for easier maintenance

/**
 * Top section history items for the primary gallery
 */
export const topHistoryItems = [
    {
      galleryTitle: [
        'Dan Kimball, Secretary of Navy, with President Harry Truman',
        'Army Navy Baseball',
      ],
      slug: "dan-kimball",
      HTMLTitle: "Space Race",
      modalTitle: "Secretary of Navy Dan Kimball",
      info: "Secretary of Navy Dan Kimball with President Harry S. Truman, and Vice Admiral Harry S. Hill at the Army-Navy baseball game at Annapolis",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404666/Hidden%20Gable%20Estate/history%20page/President_Harry_S._Truman_and_Others_at_Army-Navy_Baseball_Game_bh0bbs.jpg`,
      Component: "DanKimball", // Component name only - will be imported in the main file
    },
    {
      galleryTitle: [
        "Fashion",
        "Roaring Twenties",
      ],
      slug: 'swobdi',
      HTMLTitle: "Roaring Twenties and Fashion",
      modalTitle: "Mrs. Agnes Swobdi-Meade",
      info: "Swobdi pioneer of the Los Angeles Fashion District, was renowned for her work as an importer, designer and couturière for silent film stars.",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735422116/Hidden%20Gable%20Estate/history%20page/RoaringTwenties_ik20wu.jpg`,
      Component: "Swobdi",
    },
    {
      galleryTitle: [
        'Gable & Lombard',
        'Classic Hollywood',
      ],
      slug: 'clark-gable-and-carol-lombard',
      HTMLTitle: "Classic Hollywood",
      modalTitle: "Clark Gable and Carol Lombard",
      info: `"King of Hollywood" and one of greatest actresses of Classic Hollywood Cinema`,
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735402328/Hidden%20Gable%20Estate/home%20page/Gable-Lombard-39_nv5j1q.jpg`,
      Component: "GableLombard",
    },
    {
      galleryTitle: [
        'Political Columnist',
         'Doris Fleeson',
      ],
      slug: 'doris-fleeson',
      HTMLTitle: "Women Leadership and WWII",
      modalTitle: "Doris Fleeson",
      info: "Syndicated columnist and women's rights champion with First Lady Elenor Roosevelt",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735782803/Hidden%20Gable%20Estate/history%20page/DorisFleeson-heroes1_lz5aex.jpg`,
      Component: "DorisFleeson",
    },
  ];
  
  /**
   * Bottom section history items for the secondary gallery
   */
  export const bottomHistoryItems = [
    {
      galleryTitle: [
        `"Buy a Bomber Campaign"`,
      ],
      slug: 'wwii',
      HTMLTitle: "WWII",
      modalTitle: "WWII",
      info: "",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404675/Hidden%20Gable%20Estate/history%20page/SHE_S_READY__TOO._BUY_WAR_BONDS_-_NARA_-_515403_92_zn1vsu.jpg`,
      additionalImage: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735404682/Hidden%20Gable%20Estate/history%20page/The_Desert_Sun_1943_03_05_3_rde21d.jpg`,
      Component: "WarBonds",
    },
    {
      galleryTitle: [
        "Master Architect McNeal Swasey",
      ],
      slug: 'mcneal-swasey',
      HTMLTitle: "Spanish Colonial Revival",
      modalTitle: "Master Architect McNeal Swasey",
      info: "A Spanish Colonial Revival, one of the oldest homes in Old Las Palmas",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1735402995/Hidden%20Gable%20Estate/history%20page/MasterArchitect_xk0htu.jpg`,
      size: 'make-larger',
      Component: "MasterArchitect",
    },
    {
      galleryTitle: [
        "Shar Cracraft",
        "Editor of Palm Springs Life Magazine",
      ],
      slug: "shar-cracraft",
      HTMLTitle: "Palm Springs Celebrity",
      modalTitle: "Shar Cracraft",
      info: "Editor of Palm Springs Life Magazine",
      image: `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/image/upload/v1724950503/Hidden%20Gable%20Estate/history%20page/SharCracraft_zkyjxj.jpg`,
      Component: "SharCracraft",
    },
  ];
  
  /**
   * Combined array of all history items - can be used for searching, filtering, etc.
   */
  export const allHistoryItems = [...topHistoryItems, ...bottomHistoryItems];
  
  /**
   * Get a history item by slug
   * @param {string} slug - The slug to search for
   * @returns {object|undefined} The history item or undefined if not found
   */
  export const getHistoryItemBySlug = (slug) => {
    return allHistoryItems.find(item => item.slug === slug);
  };