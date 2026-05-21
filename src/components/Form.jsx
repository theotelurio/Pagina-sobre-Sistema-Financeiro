import { useState } from 'react';
import { TextField, Box, Typography, Stack, Paper } from '@mui/material';
import WhatsappButton from './WhatsappButton';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({
    email: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Remove o erro assim que o usuário começa a digitar no campo de e-mail novamente
    if (name === 'email') {
      setErrors((prev) => ({ ...prev, email: false }));
    }
  };

  const validateEmail = (email) => {
    // Regex simples para validação de e-mail
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isFormValid = formData.nome.trim() !== '' && 
                      validateEmail(formData.email) && 
                      formData.mensagem.trim() !== '';

  const handleValidation = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: true }));
    }
  };

  return (
    <Paper 
      elevation={1}
      component="form" 
      sx={{
        width: '100%',
        maxWidth: 900, 
        p: { xs: 3, sm: 3 }, 
        borderRadius: 3,
        border: '1px solid #ffffff',
    
      }}
    >
      <Stack spacing={2}>
        <Typography 
          variant="h5" 
          component="h2" 
          align="center" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 1 
          }}
        >
          Envie-nos uma Mensagem
        </Typography>
        
        <TextField
          label="Nome Completo"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          variant="outlined"
          fullWidth
          placeholder="Digite seu nome"
        />
        
        <TextField
          label="E-mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleValidation}
          error={errors.email}
          helperText={errors.email ? "Por favor, insira um e-mail válido." : ""}
          required
          variant="outlined"
          fullWidth
          placeholder="seu.email@exemplo.com"
        />
        
        <TextField
          label="Sua Mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
          variant="outlined"
          multiline
          rows={5}
          fullWidth
          placeholder="Como podemos te ajudar?"
        />
        
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', width: '100%' }}>
          <WhatsappButton formData={formData} disabled={!isFormValid} />
        </Box>
      </Stack>
    </Paper>
  );
};

export default Form;
