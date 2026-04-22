import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import './styles/global.css';

export default function App() {
  const [pagina, setPagina] = useState('home');

  const renderPage = () => {
    if (pagina === 'servicos') return <Servicos />;
    if (pagina === 'contato') return <Contato />;
    return <Home />;
  };

  return (
    <>
      <Navbar setPagina={setPagina} pagina={pagina} />
      <main className="container">
        {renderPage()}
      </main>
    </>
  );
}