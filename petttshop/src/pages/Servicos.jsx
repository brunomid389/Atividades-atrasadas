import servicos from '../data/servicos';

export default function Servicos() {
  return (
    <div>
      <h2>Serviços</h2>

      <div className="grid">
        {servicos.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.titulo}</h3>
            <p>{s.descricao}</p>
            <button>Agendar</button>
          </div>
        ))}
      </div>
    </div>
  );
}