import React, { useEffect, useRef, useState } from 'react';

const withViewportScaling = (WrappedComponent, baseHeight = 738) => {
  return function ViewportScaledComponent(props) {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    
    useEffect(() => {
      const updateScale = () => {
        if (!containerRef.current) return;
        
        const viewportHeight = window.innerHeight;
        const contentHeight = containerRef.current.scrollHeight;
        const padding = 32; // 2rem (1rem top + 1rem bottom)
        
        // Only scale if content is larger than viewport
        if (contentHeight > viewportHeight - padding) {
          const newScale = (viewportHeight - padding) / contentHeight;
          setScale(Math.min(1, newScale));
        } else {
          setScale(1);
        }
      };

      updateScale();
      window.addEventListener('resize', updateScale);
      
      // Add mutation observer to handle dynamic content changes
      const observer = new MutationObserver(updateScale);
      if (containerRef.current) {
        observer.observe(containerRef.current, { 
          childList: true, 
          subtree: true,
          attributes: true 
        });
      }

      return () => {
        window.removeEventListener('resize', updateScale);
        observer.disconnect();
      };
    }, []);

    return (
      <div 
        ref={containerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          height: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withViewportScaling;