import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-header">Página Não Encontrada</h1>
      <p className="notfound-message">Infelizmente, o URL que você tentou acessar não é válido.</p>
      <button className="notfound-button" onClick={() => window.location.href = '/'}>Voltar para Home</button>
    </div>
  );
}