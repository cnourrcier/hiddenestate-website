import ImageGallery from "../../components/common/ImageGallery/ImageGallery";
import "./FoundationForPsusd2025.css";

const FoundationForPsusd2025 = () => {
    const foundationEventImages = [
        {
            id: "6-3-PSUSDF-DAL_0895",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0895/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0560",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0560/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0894",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0894/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0557",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0557/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0576",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0576/public`,
            alt: "",
        },
        {
            id: "IMG_2019",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/IMG_2019/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0581",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0581/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0562",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0562/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0564",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0564/public`,
            alt: "",
        },
        {
            id: "IMG_2006",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/IMG_2006/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0566",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0566/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0569",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0569/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0572",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0572/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0579",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0579/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0591",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0591/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0594",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0594/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0595",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0595/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0600",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0600/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0604",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0604/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0606",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0606/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0612",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0612/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0615",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0615/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0630",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0630/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0628",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0628/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0632",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0632/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0611",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0611/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0637",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0637/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0640",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0640/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0641",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0641/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0646",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0646/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0649",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0649/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0652",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0652/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0661",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0661/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0662",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0662/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0666",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0666/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0669",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0669/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0679",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0679/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0685",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0685/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0701",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0701/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0708",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0708/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0583",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0583/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0711",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0711/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0721",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0721/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0714",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0714/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0728",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0728/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0752",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0752/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0754",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0754/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0768",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0768/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0787",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0787/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0783",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0783/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0789",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0789/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0793",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0793/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0797",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0797/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0802",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0802/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0807",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0807/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0827",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0827/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0811",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0811/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0831",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0831/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0878",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0878/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0839",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0839/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0837",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0837/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0847",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0847/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0853",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0853/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0855",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0855/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0859",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0859/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0861",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0861/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0865",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0865/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0870",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0870/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0865",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0865/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0871",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0871/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0873",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0873/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0878",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0878/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0886",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0886/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0891",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0891/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0897",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0897/public`,
            alt: "",
        },
        {
            id: "IMG_2008",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/IMG_2008/public`,
            alt: "",
        },
        {
            id: "IMG_2011",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/IMG_2011/public`,
            alt: "",
        },
        {
            id: "IMG_2012",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/IMG_2012/public`,
            alt: "",
        },
        {
            id: "IMG_2013",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/IMG_2013/public`,
            alt: "",
        },
        {
            id: "IMG_2014",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/IMG_2014/public`,
            alt: "",
        },
        {
            id: "IMG_2016",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/IMG_2016/public`,
            alt: "",
        },
        {
            id: "IMG_2018",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/IMG_2018/public`,
            alt: "",
        },
    ];
    return (
        <section className="foundation-event-gallery-page">
            <ImageGallery images={foundationEventImages} />
        </section>
    );
};

export default FoundationForPsusd2025;
