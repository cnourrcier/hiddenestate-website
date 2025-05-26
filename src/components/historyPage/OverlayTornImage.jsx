const OverlayTornImage = () => {
    // Define the SVG filter for the torn edge effect - using the one from v1
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

    // This is the position wrapper to enable absolute positioning
    const positionWrapperStyle = {
        position: "relative",
        width: "450px",
        maxWidth: "100%",
        height: "350px", // Adjust based on your image dimensions
        margin: "10px",
    };

    // The torn paper background - this gets the filter effect
    const tornPaperStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "#f4f1e9",
        filter: "url(#torn-edge-effect)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        zIndex: "1",
    };

    // Image styles - positioned on top of torn paper
    const imageStyle = {
        position: "absolute",
        top: "15px", // Margin from top edge
        left: "15px", // Margin from left edge
        width: "calc(100% - 30px)", // Width minus margins
        height: "calc(100% - 30px)", // Height minus margins
        objectFit: "cover", // Maintains aspect ratio
        filter: "sepia(20%) contrast(110%)", // Vintage effect
        zIndex: "2", // Above the torn paper
    };

    return (
        <div style={containerStyle}>
            {/* Render the SVG filter definition */}
            <div dangerouslySetInnerHTML={{ __html: tornEdgeSVG }} />

            {/* Position wrapper for layering */}
            <div style={positionWrapperStyle}>
                {/* Bottom layer: torn paper background */}
                <div style={tornPaperStyle}></div>

                {/* Top layer: Your actual image */}
                <img
                    src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735404666/Hidden%20Gable%20Estate/history%20page/President_Harry_S._Truman_and_Others_at_Army-Navy_Baseball_Game_bh0bbs.jpg`}
                    alt="Your vintage photo"
                    style={imageStyle}
                />
            </div>

            <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
                The image is positioned on top of a torn paper background
            </p>
        </div>
    );
};

export default OverlayTornImage;
