import { Link } from "react-router-dom";

const UnderConstruction = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'var(--ps-whiter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    content: {
      backgroundColor: 'var(--ps-white)',
      padding: '30px',
      borderRadius: '3px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      maxWidth: '500px',
      textAlign: 'center'
    },
    heading: {
      color: 'var(--ps-terracotta)',
      marginBottom: '20px'
    },
    text: {
      lineHeight: '1.6'
    },
    contact: {
      marginTop: '30px',
      fontStyle: 'italic',
      color: '#888'
    },
    contactLink: {
      color: 'var(--ps-terracotta)',
    }
    
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Under Construction</h1>
        <p style={styles.text}>
          This page is currently being updated and will be back soon.
        </p>
        <p>
          For inquiries, please <Link style={styles.contactLink} to="/contact">contact us</Link>
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;