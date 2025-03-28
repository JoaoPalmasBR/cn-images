import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [file, setFile] = useState(null);
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !nome) {
      setMensagem('Preencha todos os campos!');
      return;
    }

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('arquivo', file);

    try {
      const response = await fetch('/api/upload/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMensagem('✅ Arquivo enviado com sucesso!');
        setFile(null);
        setNome('');
      } else {
        const data = await response.text();
        setMensagem(`❌ Erro no envio: ${data}`);
      }
    } catch (error) {
      setMensagem('❌ Erro na conexão com o servidor.');
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <h2 className="mb-4">Upload de Arquivo</h2>
        <form onSubmit={handleSubmit} method="POST" accept=""> 
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Arquivo</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        {mensagem && (
          <div className="alert alert-info mt-3" role="alert">
            {mensagem}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
