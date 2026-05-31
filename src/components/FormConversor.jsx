import * as React from 'react';
import { MenuItem, Paper, Stack, FormControl, Typography, TextField, Button, Box } from "@mui/material";
import { NumberField } from '@base-ui/react';
import Select from '@mui/material/Select';

const FormConversor = () => {
  
  const [moedas, setMoedas] = React.useState({});
  const [moedaOrigem, setMoedaOri] = React.useState('');
  const [moedaDestino, setMoedaDest] = React.useState('');
  const [valor, setValor] = React.useState('');
  const [resultado, setResultado] = React.useState('');

  const mudançaMoedaOri = (event) => setMoedaOri(event.target.value);
  const mudançaMoedaDest = (event) => setMoedaDest(event.target.value);
  
  const handleConverter = async () => {
    if (!valor || !moedaOrigem || !moedaDestino) {
      setResultado("Preencha todos os campos!");
      return;
    }

    setResultado("Buscando cotação ao vivo...");

    try {
      // Monta URL
      const url = `https://api.fxratesapi.com/latest?base=${moedaOrigem}&currencies=${moedaDestino}&api_key=${import.meta.env.VITE_FX_RATES_API_KEY}`;
      
      // Mete a requisição
      const response = await fetch(url);
      const data = await response.json();

      // Valida o dado retornado da API FODA
      if (data && data.success && data.rates && data.rates[moedaDestino]) {
        const taxaDeConversao = data.rates[moedaDestino]; 
        
        const valorNumerico = parseFloat(valor.replace(',', '.'));
        const valorFinal = valorNumerico * taxaDeConversao;

        
        const simboloOrigem = moedas[moedaOrigem]?.symbol || moedaOrigem;
        const simboloDestino = moedas[moedaDestino]?.symbol || moedaDestino;
        
        // Variável que a gente mostra na tela
        setResultado(`${simboloOrigem} ${valorNumerico.toFixed(2)} = ${simboloDestino} ${valorFinal.toFixed(2)}`);
      } else {
        setResultado("Erro: API não retornou a taxa.");
      }
    } catch (erro) {
      console.error(erro);
      setResultado("Erro na conexão com a API!");
    }
  };

  React.useEffect(() => {
    const carregarMoedas = async () => {
      try {
        const response = await fetch('https://api.fxratesapi.com/currencies');
        const data = await response.json();
        
        // Define as moedas que você quer mostrar
        const moedasDesejadas = ['USD', 'EUR', 'BRL', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'ARS'];
        const moedasFiltradas = {};
        
        // Filtra o resultado da API para manter apenas as moedas desejadas
        moedasDesejadas.forEach(codigo => {
          if (data[codigo]) {
            moedasFiltradas[codigo] = data[codigo];
          }
        });
        
        setMoedas(moedasFiltradas);
      } catch (erro) {
        console.error("Erro ao carregar moedas", erro);
      }
    };
    
    carregarMoedas();
  }, []);

  return (
    <>
      <Typography
        align="center"
        variant='h4'
        sx={{
          fontWeight: 'bold',
          mb: 3
        }}
      >
        Conversor de Moedas
      </Typography>
      <Paper
        elevation={12}
        component="form" 
        sx={{
          width: '100%',
          maxWidth: 500, 
          p: { xs: 4, sm: 5 }, 
          border: '2px solid transparent',
          backgroundColor: 'white', 
          borderRadius: 2
        }}
      >
        <Stack spacing={3}>
          
          <Box>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}>
              Moeda de Origem
            </Typography>
            <FormControl 
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root fieldset': {
                  borderColor: moedaOrigem ? 'black' : 'primary.main',
                },
                '& .MuiOutlinedInput-root:hover fieldset': {
                  borderColor: moedaOrigem ? 'black' : 'primary.main',
                },
                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                  borderColor: moedaOrigem ? 'black' : 'primary.main',
                },
              }}
            >
              <Select
                id="moedaOrigem"
                value={moedaOrigem}
                displayEmpty
                onChange={mudançaMoedaOri}
                sx={{ color: moedaOrigem ? 'black' : 'rgba(0, 0, 0, 0.6)' }}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  PaperProps: {
                    sx: { mt: 1 },
                  },
                }}
              >
                <MenuItem value="" disabled>Ex: dólar, euro ou real</MenuItem>
                {Object.values(moedas).map((moeda) => (
                  <MenuItem key={moeda.code} value={moeda.code}>
                    {moeda.name} ({moeda.code})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          
          <Box>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}>
              Moeda de Destino
            </Typography>
            <FormControl 
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root fieldset': {
                  borderColor: moedaDestino ? 'black' : 'primary.main',
                },
                '& .MuiOutlinedInput-root:hover fieldset': {
                  borderColor: moedaDestino ? 'black' : 'primary.main',
                },
                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                  borderColor: moedaDestino ? 'black' : 'primary.main',
                },
              }}
            >
              <Select
                id="moedaDestino"
                value={moedaDestino}
                displayEmpty
                onChange={mudançaMoedaDest}
                sx={{ color: moedaDestino ? 'black' : 'rgba(0, 0, 0, 0.6)' }}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  PaperProps: {
                    sx: { mt: 1 },
                  },
                }}
              >
                <MenuItem value="" disabled>Ex: dólar, euro ou real</MenuItem>
                {Object.values(moedas).map((moeda) => (
                  <MenuItem key={moeda.code} value={moeda.code}>
                    {moeda.name} ({moeda.code})
                  </MenuItem>
                ))}
              </Select>  
            </FormControl>
          </Box>

          <Box>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}>
              Valor
            </Typography>
            <TextField
              id="valor"
              fullWidth
              placeholder="Ex: 100"
              value={valor}
              onChange={(e) => {
                const apenasNumeros = e.target.value.replace(/[^0-9.,]/g, '');
                setValor(apenasNumeros);
              }}
              inputProps={{ inputMode: 'decimal' }}
              sx={{
                '& .MuiOutlinedInput-root fieldset': {
                  borderColor: 'black',
                },
                '& .MuiOutlinedInput-root:hover fieldset': {
                  borderColor: 'black',
                },
                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                  borderColor: 'black',
                },
                '& .MuiInputBase-input': {
                  color: 'black',
                }
              }}
            />
          </Box>

          <Box 
            sx={{ 
              p: 3, 
              backgroundColor: resultado ? '#f3f0f5' : 'transparent', 
              borderRadius: 2, 
              border: resultado ? '2px dashed #5C527F' : '1px solid #e0e0e0',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <Typography variant='subtitle2' sx={{ color: 'gray', mb: 0.5, textTransform: 'uppercase', letterSpacing: 1 }}>
              Resultado da Conversão
            </Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', color: resultado.includes('Preencha') ? 'red' : '#5C527F' }}>
              {resultado || "Aguardando..."}
            </Typography>
          </Box>

          <Button 
            variant="contained" 
            size="large"
            onClick={handleConverter}
            sx={{
              backgroundColor: '#5C527F',
              color: 'white',
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: 2,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#4a4266',
              }
            }}
          >
            Converter
          </Button>

        </Stack>
      </Paper>
    </>
  );
};

export default FormConversor;