import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4 className="footer-title">Casa Lar Rio Novo</h4>
        <p className="footer-address">Rua Jacob da Paixao, 115 Rio Novo - MG, 36.150-000</p>
        <div className="footer-social">
          <a href="https://www.instagram.com/casalarderionovo/" className="footer-link" target='external' rel='_blank'>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
