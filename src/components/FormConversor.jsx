import * as React from 'react';
import { MenuItem, Paper, Stack, FormControl, Typography, TextField, Button, Box } from "@mui/material";
import { NumberField } from '@base-ui/react';
import Select from '@mui/material/Select';

const FormConversor = () => {
  
  const [moedaOrigem, setMoedaOri] = React.useState('');
  const [moedaDestino, setMoedaDest] = React.useState('');
  const [valor, setValor] = React.useState('');
  const [resultado, setResultado] = React.useState('');

  const mudançaMoedaOri = (event) => setMoedaOri(event.target.value);
  const mudançaMoedaDest = (event) => setMoedaDest(event.target.value);
  
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
          border: '2px solid #29b6f6',
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
              >
                <MenuItem value="" disabled>Ex: dólar, euro ou real</MenuItem>
                <MenuItem value={1}>Dolar</MenuItem>
                <MenuItem value={2}>Euro</MenuItem>
                <MenuItem value={3}>Real</MenuItem>
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
              >
                <MenuItem value="" disabled>Ex: dólar, euro ou real</MenuItem>
                <MenuItem value={1}>Dolar</MenuItem>
                <MenuItem value={2}>Euro</MenuItem>
                <MenuItem value={3}>Real</MenuItem>
              </Select>  
            </FormControl>
          </Box>

          <Box>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}>
              Valor
            </Typography>
            <TextField
              // type='number'
              id="valor"
              fullWidth
              placeholder="Ex: 100"
              value={valor}
              onChange={(e) => {
                // Filtra tudo que não for número, ponto ou vírgula
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

          <Box>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}>
              Resultado
            </Typography>
            <TextField
              id="resultado"
              fullWidth
              disabled
              placeholder="Ex: R$ 100 = 20 $"
              value={resultado}
              sx={{
                '& .MuiOutlinedInput-root fieldset': {
                  borderColor: 'black',
                },
                '& .MuiInputBase-input': {
                  color: 'black',
                }
              }}
            />
          </Box>

          <Button 
            variant="contained" 
            size="large"
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