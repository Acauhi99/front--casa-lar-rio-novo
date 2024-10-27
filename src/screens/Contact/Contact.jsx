import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Entre em Contato</h1>
      <p className="contact-intro">Ficaremos felizes em ajudar! Preencha o formulário abaixo para entrar em contato conosco.</p>
      <form className="contact-form">
        <input type="text" placeholder="Seu Nome" className="contact-input" />
        <input type="email" placeholder="Seu Email" className="contact-input" />
        <textarea placeholder="Sua Mensagem" className="contact-input" rows="4"></textarea>
        <button type="submit" className="contact-button">Enviar Mensagem</button>
      </form>
    </div>
  );
}
