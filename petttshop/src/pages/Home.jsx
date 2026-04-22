import produtos from '../data/produtos';

export default function Home() {
  return (
    <div>
      <h2>Produtos</h2>

      <div className="grid">
        {produtos.map(p => (
          <div key={p.id} className="card">
            <img src={p.img} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p>{p.preco}</p>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}