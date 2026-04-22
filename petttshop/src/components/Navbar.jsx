export default function Navbar({ setPagina, pagina }) {
  return (
    <nav className="nav">
      <h1>🐾 PetShop</h1>

      <div>
        <button onClick={() => setPagina('home')}>Início</button>
        <button onClick={() => setPagina('servicos')}>Serviços</button>
        <button onClick={() => setPagina('contato')}>Contato</button>
      </div>
    </nav>
  );
}