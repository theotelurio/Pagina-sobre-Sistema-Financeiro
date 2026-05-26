import React from 'react';
import Form from '../components/Form';
import { Box, Typography, Container } from '@mui/material';
import FormConversor from '../components/FormConversor';

const Conversor = () => {   
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
                p: '3',
                gap:'4',
                width: '100%'
            }}
        >
            
            <FormConversor/>
        </Box>
    );
}
export default Conversor; 