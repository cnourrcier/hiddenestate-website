import React, { useEffect, useRef, useState } from 'react';

const PADDING = 30; // Padding around the box in pixels
const SPACE_WIDTH = 5;

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    minHeight: '100%',
  },
  box: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    width: 'auto',
    height: 'auto',
    backgroundColor: 'var(--ps-sand)',
    color: 'var(--ps-blue)',
    padding: '1.5rem',
    borderRadius: '3px',
    border: '5px solid var(--ps-whiter)',
  },
  boxTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.4rem',
    paddingBottom: '0.5rem',
  },
  boxTitleUnderline: {
    width: '75px',
    height: '3px',
    backgroundColor: 'var(--ps-whiter)',
    margin: 'auto',
  },
  list: {
    marginTop: '0.5rem',
  },
  listItemLeft: {
    paddingLeft: '1rem',
    // borderLeft: '4px solid var(--ps-terracotta)',
    color: 'var(--ps-blue)',
  },
  listItemRight: {
    paddingLeft: '3rem',
    color: 'var(--ps-terracotta)',
  },
  textContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  slogan: {
    textAlign: 'center',
    fontSize: '1.3rem',
  }
};

const TextFlow = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState('auto');

  useEffect(() => {
    const text = `Hidden Gable Estate is named for the many Spanish gables hidden behind its pink walls, a style that reflects the glamour of Hollywood's Golden Age. A Spanish Colonial Revival, one of the oldest homes in Old Las Palmas, was created by Master Architect McNeal Swasey for Los Angeles fashion designer and importer Mrs. Agnes Swobdi-Meade during the "Roaring Twenties." Swobdi, a pioneer of the Los Angeles Fashion District, was renowned for her work as an importer, designer and couturière for silent film stars. McNeal Swasey, an esteemed architect to southern California's elite, was known for using advanced technologies. The house is perfectly oriented to avoid sun exposure on bedroom windows, features a fireproof and earthquake-resistant structure. The thick concrete walls provide thermal massing, virtually eliminating temperature fluctuations throughout the day and night. This estate's legacy is a rich tapestry, interwoven with the stories of remarkable individuals whose influence spanned fashion, film, government, and industry. Among its distinguished occupants were Clark Gable, the "King of Hollywood"; Carole Lombard, one of the most celebrated actresses of Classic Hollywood Cinema; Doris Fleeson, a trailblazing syndicated columnist who shaped public opinion across five U.S. presidencies and championed women's rights; and Dan Kimball, a retired Secretary of the Navy and CEO whose leadership left a lasting impact on naval policy and strategy. In the early 1950’s, the first Bishop of Yakima, WA visited often.  Statues of St. Francis from that period still exist on the property.  And many more …`
    
    const calculateTextPositions = () => {
      const box = boxRef.current.getBoundingClientRect();
      const container = containerRef.current.getBoundingClientRect();
      
      // Clear existing text
      while (textRef.current.firstChild) {
        textRef.current.removeChild(textRef.current.firstChild);
      }
      
      let currentX = 0;
      let currentY = 0;
      const words = text.split(' ');
      
      // Add padding to box boundaries
      const boxBounds = {
        left: box.left - container.left - PADDING,
        right: box.right - container.left + PADDING,
        top: box.top - container.top - PADDING,
        bottom: box.bottom - container.top + PADDING
      };
      
      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.textContent = word;
        if (span.textContent === 'Hidden') span.style.fontWeight = 'bold'
        else if (span.textContent === 'Gable') span.style.fontWeight = 'bold'
        else if (span.textContent === 'Estate') span.style.fontWeight = 'bold'
        span.style.color = 'var(--ps-blue)';
        span.style.position = 'absolute';
        textRef.current.appendChild(span);
        
        const wordWidth = span.getBoundingClientRect().width + SPACE_WIDTH;
        
        // Check if word would intersect with padded box area
        if (currentX + wordWidth > boxBounds.left && 
            currentX < boxBounds.right &&
            currentY + span.offsetHeight > boxBounds.top && 
            currentY < boxBounds.bottom) {
            // Skip to after the box if word would intersect
            currentX = boxBounds.right;
        }
        
        // Move to next line if word doesn't fit
        if (currentX + wordWidth > container.width) {
          currentX = 0;
          currentY += span.offsetHeight + SPACE_WIDTH;
        }
        
        span.style.left = `${currentX}px`;
        span.style.top = `${currentY}px`;
        
        currentX += wordWidth;
      });

      setContainerHeight(`${currentY + PADDING}px`);
    };

    calculateTextPositions();
    window.addEventListener('resize', calculateTextPositions);
    
    return () => window.removeEventListener('resize', calculateTextPositions);
  }, []);

  return (
    <>
      <div ref={containerRef} style={{...styles.container, minHeight: containerHeight}}>
        <div ref={boxRef} style={styles.box}>
          <p style={styles.boxTitle}>
            Winter Residents:
          </p>
          <div style={styles.boxTitleUnderline}></div>
            <ul style={styles.list}>
              <li style={styles.listItemLeft}>Bing and Dixie Crosby</li>
              <li style={styles.listItemRight}>Radio/television personalities</li>
              <li style={styles.listItemLeft}>Sammy Davis Jr</li>
              <li style={styles.listItemRight}>Singer, Actor, Comedian, Dancer, Musician</li>
              <li style={styles.listItemLeft}>Maurice Chevalier</li>
              <li style={styles.listItemRight}>French singer/actor</li>
              <li style={styles.listItemLeft}>Bishop Joseph P. Dougherty</li>
              <li style={styles.listItemRight}>First Bishop of Yakima, WA</li>
            </ul>
        </div>
        <div ref={textRef} style={styles.textContainer} />
      </div>
      <h3 style={styles.slogan}><b><i>If these walls could talk!</i></b></h3>
    </>
  );
};

export default TextFlow;