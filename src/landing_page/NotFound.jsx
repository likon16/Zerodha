import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/home" style={styles.link}>Go back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem',
  },
  code: {
    fontSize: '6rem',
    color: '#0077cc',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
    color: '#555',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#0077cc',
    padding: '0.6rem 1.2rem',
    borderRadius: '5px',
  }
};

export default NotFound;
