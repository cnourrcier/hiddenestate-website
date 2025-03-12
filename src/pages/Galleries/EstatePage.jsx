import { Helmet } from "react-helmet-async";
import ImageGallery from "../../components/ImageGallery";
import './EstatePage.css';

const EstatePage = () => {

  const estateImages = [
    { 
      id: 1,
      imageID: 'cf23209b-fb41-4008-079f-ae78188cdd00',
      name: '20241122_145117 small.jpg', 
      alt: 'Description of image 1'
    },
    { 
      // id: 1,
      imageID: '228a5627-0753-4a01-87c4-3803d9b24f00',
      name: '_I1A0197m_2_oiuer9 small.jpg', 
      alt: 'Description of image 1'
    },
    { 
      // id: 1,
      imageID: '40d1d2a5-3385-42a0-ea05-1456f5564500',
      name: '20241122_145440 small.jpg', 
      alt: 'Description of image 1'
    },
    { 
      id: 2,
      imageID: '925c3886-11c4-4c35-25e2-648bd7663b00',
      name: '_I1A0308 small.jpg', 
      alt: 'Description of image 1'
    },
    { 
      id: 3,
      imageID: '9aba02f4-3f30-4619-daf9-457f2a985c00',
      name: '_I1A0456 small.jpg', 
      alt: 'Description of image 2' 
    },
    { 
      id: 4,
      imageID: '03b7f9fc-94c5-4d46-8563-44a381ded800',
      name: '_I1A0461 small.jpg', 
      alt: 'Beautiful landscape' 
    },
    { 
      id: 5,
      imageID: 'a62dfd6a-8755-4789-2236-e26b3dee2200',
      name: '_I1A0464 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 6,
      imageID: 'aceab53d-ed29-4aa3-49de-c11892d03400',
      name: '_I1A0483 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 7,
      imageID: '39ff3f5e-be3f-45c1-3088-ef9264a9cd00',
      name: '_I1A0534 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 8,
      imageID: 'ac2abcff-fa89-4a85-bf94-6f7a5d048000',
      name: 'IMG_7976 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 9,
      imageID: 'd88273a4-8dcf-4c68-26be-1cee4f643100',
      name: 'IMG_7978 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 10,
      imageID: '9cb86f43-0bad-4796-42fa-877aec234200',
      name: 'IMG_7982 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 11,
      imageID: '2097e8a5-90c4-49b1-a405-2da9d98b9c00',
      name: 'IMG_7986 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 12,
      imageID: 'd3894e74-4beb-4eef-a19d-d0ecdd672f00',
      name: 'IMG_7984 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 13,
      imageID: '601a7255-ce89-4876-2930-65689cfdeb00',
      name: 'IMG_7989 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 14,
      imageID: 'a1ff705f-f6b1-4940-9f9d-9e464cf33b00',
      name: 'IMG_7991 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 15,
      imageID: 'fec1f179-864b-40d2-21d6-ff53806a0400',
      name: 'IMG_7992 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 16,
      imageID: 'a878b3b7-c5ca-4811-b1ec-ca224d4ef800',
      name: 'IMG_8002 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 17,
      imageID: '01622923-550f-4a4f-be1b-6ce6f7faa400',
      name: 'IMG_8004 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 18,
      imageID: '5cf54318-ab95-4e94-3f13-00c2af6b2100',
      name: 'IMG_8005 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 19,
      imageID: 'af7c8340-70f7-42b6-5451-5610145f8100',
      name: 'IMG_8006 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 20,
      imageID: 'cc245545-f707-44d0-04b2-ce056533a400',
      name: 'IMG_8014 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 21,
      imageID: 'eea86cc9-c1e4-450d-acd6-25ccc43af800',
      name: 'IMG_8023 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 22,
      imageID: '11d7e279-ad87-45da-6382-a3fd80f49d00',
      name: 'IMG_8025 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 23,
      imageID: 'c7584d59-1543-4acb-67ef-1e878c516900',
      name: 'IMG_8027 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 24,
      imageID: '0ca44795-1a19-48c3-cf89-e6b32ff02d00',
      name: 'IMG_8028 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 25,
      imageID: 'd6edd742-18d8-42cd-b8dc-4770f8402b00',
      name: 'IMG_8037 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 26,
      imageID: '5e341c9a-adb9-4c29-3326-8cee8fa62b00',
      name: 'IMG_8038 small.jpg', 
      alt: 'Portrait photo' 
    },
    { 
      id: 27,
      imageID: '1becceae-49b5-4bde-4582-fa530fadf600',
      name: 'IMG_8047 small.jpg',
      alt: 'Portrait photo' 
    },
    { 
      id: 28,
      imageID: '4326de22-e88c-4d6a-2539-461e19871c00',
      name: 'IMG_8046 small.jpg', // for reference on Cloudflare
      alt: 'Portrait photo' 
    },
  ];

  return (

    <>
      <Helmet>
        <title>Estate Gallery</title>
      </Helmet>

      <main className="estate-page">
        <ImageGallery images={ estateImages } />
      </main>
    </>
  );
};

export default EstatePage;