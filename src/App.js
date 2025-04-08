
import React, { useState } from 'react';

function App() {
  const [resposta, setResposta] = useState('');

  const gerarPlano = async () => {
    const prompt = "Crie um plano de treino e dieta para ganhar massa muscular";
    const respostaMock = "Treino: ABCD // Dieta: 3000 calorias com proteínas, carbs e gorduras.";
    setResposta(respostaMock);
  };

  return (
    <div style={{ padding: 30, fontFamily: 'sans-serif' }}>
      <h1>ShapeX.ai 🧠💪</h1>
      <p>Seu plano personalizado de treino e dieta com IA</p>
      <button onClick={gerarPlano} style={{ padding: 10, marginTop: 20 }}>Gerar Plano</button>
      <pre style={{ marginTop: 20, background: '#eee', padding: 20 }}>{resposta}</pre>
    </div>
  );
}

export default App;
