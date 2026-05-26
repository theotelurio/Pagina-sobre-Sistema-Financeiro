import * as React from 'react';
import { InputLabel, MenuItem, Paper, Stack, FormControl } from "@mui/material";
import Select from '@mui/material/Select';

const FormConversor = () => {
  
  const [moedaOrigem, setMoedaOri] = React.useState('');
  const [moedaDestino, setMoedaDest] = React.useState('');

  const mudançaMoedaOri = (event) => {
    setMoedaOri(event.target.value);
  };
  
  const mudançaMoedaDest = (event) => {
    setMoedaDest(event.target.value);
  }
  
  return (
      <Paper
        elevation={12}
        component="form" 
        sx={{
          width: '100%',
          maxWidth: 800, 
          p: { xs: 3, sm: 3 }, 
          border: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'white ', 
          backdropFilter: 'blur(10px)'
        }}
      >
        <Stack spacing={3}>
          
          <FormControl fullWidth
            sx={{
              // Cor da BORDA quando NÃO está clicado (padrão)
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
              // Cor da BORDA quando passa o mouse por cima
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'purple',
              },
              // Cor da BORDA quando CLICA (foco)
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'purple',
              },
              // Cor do TEXTO DA LABEL quando NÃO está clicado
              '& .MuiInputLabel-root': {
                color: 'black',
              },
              // Cor do TEXTO DA LABEL quando CLICA (foco)
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'purple',
              },
            }}
          >
            <InputLabel id="moedaOrigem">Moeda de Origem</InputLabel>
            <Select
              labelId="moedaOrigem"
              id="moedaOrigem"
              value={moedaOrigem}
              label="Ex: Dolar, Euro, Real"
              onChange={mudançaMoedaOri}
            >
              <MenuItem value={1}>Dolar</MenuItem>
              <MenuItem value={2}>Euro</MenuItem>
              <MenuItem value={3}>Real</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'purple',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'purple',
              },
              '& .MuiInputLabel-root': {
                color: 'black',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'purple',
              },
            }}
          >
            <InputLabel id="moedaDestino">Moeda de Destino</InputLabel>
            <Select
              labelId="moedaDestino"
              id="moedaDestino"
              value={moedaDestino}
              label="Ex: Dolar, Euro, Real"
              onChange={mudançaMoedaDest}
            >
              <MenuItem value={1}>Dolar</MenuItem>
              <MenuItem value={2}>Euro</MenuItem>
              <MenuItem value={3}>Real</MenuItem>
            </Select>
          </FormControl>
          
        </Stack>
      </Paper>
  );
};

export default FormConversor;