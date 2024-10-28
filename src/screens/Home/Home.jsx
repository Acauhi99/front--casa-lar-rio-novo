import './Home.css';
import Footer from '../../components/Footer/Footer';

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Bem-vindo à Home Page</h1>
      <p className="home-intro">Esta é a página inicial do nosso site. Esperamos que você goste!</p>
      <button className="home-button">Clique Aqui</button>

      <div>
      <Footer />
      </div>
    </div>
  );
}