import React, { useState } from "react";

export default function Conversor() {
  const [valor, setValor] = useState(0);
  const [resultado, setResultado] = useState(0);
  const taxaCambio = 5.5; // Exemplo de taxa fixa USD para BRL

  const converter = () => {
    setResultado(valor * taxaCambio);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Conversor de Moedas</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>Valor em Dólar (USD): </label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
      </div>
      <button onClick={converter}>Converter para Real (BRL)</button>
      <h2 style={{ marginTop: "20px" }}>
        Resultado: R$ {resultado.toFixed(2)}
      </h2>
    </div>
  );
}
