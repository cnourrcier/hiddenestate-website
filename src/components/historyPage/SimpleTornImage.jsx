const SimpleTornImage = () => {
    // Define the SVG filter for the torn edge effect
    const tornEdgeSVG = `
    <svg width="0" height="0">
      <defs>
        <filter id="torn-edge-effect" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" seed="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  `;

    // Container styles
    const containerStyle = {
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    // Torn paper container styles
    const tornPaperStyle = {
        position: "relative",
        padding: "12px",
        background: "#f4f1e9",
        filter: "url(#torn-edge-effect)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        margin: "10px",
    };

    // Inner container to hold the image
    const imageContainerStyle = {
        overflow: "hidden",
        maxWidth: "100%",
    };

    // Image styles with vintage effect
    const imageStyle = {
        display: "block",
        width: "100%",
        maxWidth: "450px",
        height: "auto",
        filter: "sepia(20%) contrast(110%)",
    };

    return (
        <div style={containerStyle}>
            {/* Render the SVG filter definition */}
            <div dangerouslySetInnerHTML={{ __html: tornEdgeSVG }} />

            {/* Torn paper container with the image inside */}
            <div style={tornPaperStyle}>
                <div style={imageContainerStyle}>
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404666/Hidden%20Gable%20Estate/history%20page/President_Harry_S._Truman_and_Others_at_Army-Navy_Baseball_Game_bh0bbs.jpg`}
                        alt="Your vintage photo"
                        style={imageStyle}
                    />
                </div>
            </div>

            <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
                Replace the placeholder with your own image by changing the src
                attribute
            </p>
        </div>
    );
};

export default SimpleTornImage;
