import "./EstateCollage.css";

const EstateCollage = () => {
    return (
        <section className="estate-collage">
            <div className="estate-collage__main">
                <img
                    src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/bd300306-be21-4b43-e439-1d35fe310200/public`}
                    alt="Twilight poolside gathering with colorful umbrellas and string lights at Hidden Estate"
                    className="estate-collage__img"
                    loading="lazy"
                />
            </div>
            <div className="estate-collage__side">
                <img
                    src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/a6bd670e-d588-45a4-d0d0-fc146b8d9300/public`}
                    alt="Daytime pool and patio with mountain views at Hidden Estate"
                    className="estate-collage__img"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default EstateCollage;
