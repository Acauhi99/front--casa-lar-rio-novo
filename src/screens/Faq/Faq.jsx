import React from 'react';
import './Faq.css';

export const Faq = () => {
  return (
    <div className="faq-container">
      <h1 id="faq-title">Dúvidas Frequentes</h1>
      <div className="faq-item">
        <h2>Pergunta 1</h2>
        <p>Resposta 1</p>
      </div>
      <div className="faq-item">
        <h2>Pergunta 2</h2>
        <p>Resposta 2</p>
      </div>
      <div className="faq-item">
        <h2>Pergunta 3</h2>
        <p>Resposta 3</p>
      </div>
      <div className="contact-buttons">
        <button className="whatsapp-button">Entre em contato pelo WhatsApp</button>
        <button className="instagram-button">Entre em contato pelo Instagram</button>
      </div>
    </div>
  );
}