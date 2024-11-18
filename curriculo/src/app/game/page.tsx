'use client'

import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Alert } from '@mui/material';

function JogoBullsAndCows() {
  const [tentativas, setTentativas] = useState<string[]>([]);
  const [entrada, setEntrada] = useState('');
  const [codigoAleatorio] = useState(gerarCodigoAleatorio());
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  function gerarCodigoAleatorio() {
    const digitos = new Set<string>();
    while (digitos.size < 4) {
      const digitoAleatorio = Math.floor(Math.random() * 10).toString();
      digitos.add(digitoAleatorio);
    }
    return Array.from(digitos).join('');
  }

  function handleMudancaEntrada(event: React.ChangeEvent<HTMLInputElement>) {
    setEntrada(event.target.value);
  }

  function handleTentativa() {
    if (entrada.length !== 4) {
      alert('Por favor insira um número de 4 dígitos');
      return;
    }

    const resultado = verificarBullsAndCows(entrada);
    setTentativas([`${entrada} - ${resultado}`, ...tentativas]);
    setEntrada('');
  }

  function verificarBullsAndCows(tentativa: string) {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (tentativa[i] === codigoAleatorio[i]) {
        bulls++;
      } else if (codigoAleatorio.includes(tentativa[i])) {
        cows++;
      }
    }

    return `${bulls} Bulls, ${cows} Cows`;
  }

  function handleMostrarResposta() {
    setMostrarAlerta(true);
  }

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>Bulls e Cows</Typography>
      <TextField
        label="Insira sua tentativa"
        variant="outlined"
        value={entrada}
        onChange={handleMudancaEntrada}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleTentativa} fullWidth>Testar</Button>

      {mostrarAlerta && (
        <Alert severity="info" onClose={() => setMostrarAlerta(false)}>
          A resposta é: {codigoAleatorio}
        </Alert>
      )}
      
      <Button variant="outlined" color="secondary" onClick={handleMostrarResposta} fullWidth sx={{ mt: 2 }}>
        Mostrar Resposta
      </Button>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Tentativas</Typography>
        {tentativas.map((tentativa, index) => (
          <Typography key={index}>{tentativa}</Typography>
        ))}
      </Box>
    </Box>
  );
}

export default JogoBullsAndCows;
