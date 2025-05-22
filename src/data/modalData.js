// This file centralizes all modal-related data in one place for easier maintenance

/**
 * History page modal items
 */
export const historyModalItems = [
    {
        galleryTitle: [
            "Dan Kimball, Secretary of Navy, with President Harry Truman",
            "Army Navy Baseball",
        ],
        slug: "dan-kimball",
        HTMLTitle: "Space Race",
        modalTitle: "Secretary of Navy Dan Kimball",
        info: "Secretary of Navy Dan Kimball with President Harry S. Truman, and Vice Admiral Harry S. Hill at the Army-Navy baseball game at Annapolis",
        image: `https://res.cloudinary.com/${
            import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
        }/image/upload/v1735404666/Hidden%20Gable%20Estate/history%20page/President_Harry_S._Truman_and_Others_at_Army-Navy_Baseball_Game_bh0bbs.jpg`,
        Component: "DanKimball", // Component name only - will be imported in the context
        pageRoute: "history",
    },
    {
        galleryTitle: ["Fashion", "Roaring Twenties"],
        slug: "swobdi",
        HTMLTitle: "Roaring Twenties and Fashion",
        modalTitle: "Mrs. Agnes Swobdi-Meade",
        info: "Swobdi pioneer of the Los Angeles Fashion District, was renowned for her work as an importer, designer and couturière for silent film stars.",
        image: `https://res.cloudinary.com/${
            import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
        }/image/upload/v1735422116/Hidden%20Gable%20Estate/history%20page/RoaringTwenties_ik20wu.jpg`,
        Component: "Swobdi",
        pageRoute: "history",
    },
    {
        galleryTitle: ["Gable & Lombard", "Classic Hollywood"],
        slug: "clark-gable-and-carol-lombard",
        HTMLTitle: "Classic Hollywood",
        modalTitle: "Clark Gable and Carol Lombard",
        info: `"King of Hollywood" and one of greatest actresses of Classic Hollywood Cinema`,
        image: `https://res.cloudinary.com/${
            import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
        }/image/upload/v1735402328/Hidden%20Gable%20Estate/home%20page/Gable-Lombard-39_nv5j1q.jpg`,
        Component: "GableLombard",
        pageRoute: "history",
    },
    {
        galleryTitle: ["Political Columnist", "Doris Fleeson"],
        slug: "doris-fleeson",
        HTMLTitle: "Women Leadership and WWII",
        modalTitle: "Doris Fleeson",
        info: "Syndicated columnist and women's rights champion with First Lady Elenor Roosevelt",
        image: `https://res.cloudinary.com/${
            import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
        }/image/upload/v1735782803/Hidden%20Gable%20Estate/history%20page/DorisFleeson-heroes1_lz5aex.jpg`,
        Component: "DorisFleeson",
        pageRoute: "history",
    },
    {
        galleryTitle: [`"Buy a Bomber Campaign"`],
        slug: "wwii",
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
        pageRoute: "history",
    },
    {
        galleryTitle: ["Master Architect McNeal Swasey"],
        slug: "mcneal-swasey",
        HTMLTitle: "Spanish Colonial Revival",
        modalTitle: "Master Architect McNeal Swasey",
        info: "A Spanish Colonial Revival, one of the oldest homes in Old Las Palmas",
        image: `https://res.cloudinary.com/${
            import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
        }/image/upload/v1735402995/Hidden%20Gable%20Estate/history%20page/MasterArchitect_xk0htu.jpg`,
        size: "make-larger",
        Component: "MasterArchitect",
        pageRoute: "history",
    },
    {
        galleryTitle: ["Shar Cracraft", "Editor of Palm Springs Life Magazine"],
        slug: "shar-cracraft",
        HTMLTitle: "Palm Springs Celebrity",
        modalTitle: "Shar Cracraft",
        info: "Editor of Palm Springs Life Magazine",
        image: `https://res.cloudinary.com/${
            import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
        }/image/upload/v1724950503/Hidden%20Gable%20Estate/history%20page/SharCracraft_zkyjxj.jpg`,
        Component: "SharCracraft",
        pageRoute: "history",
    },
];

/**
 * Home page modal items
 */
export const homeModalItems = [
    {
        galleryTitle: ["Claude Monet Inspiration"],
        slug: "monet-inspiration",
        HTMLTitle: "Claude Monet Inspiration",
        modalTitle: "Claude Monet Inspiration",
        image: "claudeMonetInspiration", // This will be replaced in the context with the actual import
        Component: "ClaudeMonet",
        pageRoute: "home",
    },
];

/**
 * Combined array of all modal items - can be used for searching, filtering, etc.
 */
export const allModalItems = [...historyModalItems, ...homeModalItems];

/**
 * Get a modal item by slug
 * @param {string} slug - The slug to search for
 * @returns {object|undefined} The modal item or undefined if not found
 */
export const getItemBySlug = slug => {
    return allModalItems.find(item => item.slug === slug);
};

/**
 * Get modal items by page route
 * @param {string} pageRoute - The page route to filter by
 * @returns {Array} Array of modal items for the specified page route
 */
export const getItemsByPageRoute = pageRoute => {
    return allModalItems.filter(item => item.pageRoute === pageRoute);
};

/**
 * Top history gallery items
 */
export const topHistoryItems = historyModalItems.slice(0, 4);

/**
 * Bottom history gallery items
 */
export const bottomHistoryItems = historyModalItems.slice(4, 7);
