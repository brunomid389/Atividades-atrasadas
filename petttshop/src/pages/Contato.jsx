export default function Contato() {
  return (
    <div>
      <h2>Contato</h2>

      <p> Bruxa do 71, 71</p>
      <p> (81) 666-6666</p>
      <p> contato@petshop.com</p>

      <form className="form">
        <input placeholder="Nome" />
        <input placeholder="Email" />
        <textarea placeholder="Mensagem" />
        <button>Enviar</button>
      </form>
    </div>
  );
}