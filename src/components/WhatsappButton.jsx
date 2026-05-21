import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Swal from 'sweetalert2';

const WhatsappButton = ({ formData, disabled }) => {
  const handleClick = () => {
    if (disabled) {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text: 'Preencha todos os campos corretamente antes de enviar.',
      });
      return;
    }


    const numeroWhatsApp = "5569993687236"; 
    
    const textoMensagem = `Olá! Meu nome é ${formData.nome}. \nMeu e-mail é: ${formData.email} \n\nMensagem: \n${formData.mensagem}`;
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(url, '_blank');
  };

  return (
    <Button
      variant="contained"
      color="success"
      size="large"
      startIcon={<WhatsAppIcon />}
      onClick={handleClick}
      disabled={disabled}
      sx={{ 
        width: '100%', 
        backgroundColor: disabled ? 'action.disabledBackground' : '#25D366', 
        '&:hover': {
          backgroundColor: '#1EBE57'
        }
      }}
    >
      Enviar via WhatsApp
    </Button>
  );
};

export default WhatsappButton;
