import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f2f2f2",
      }}
    >

      <Box sx={{ flex: 1 }}>

        <Box
          sx={{
            bgcolor: "#3c3767",
            color: "white",
            textAlign: "center",
            py: 10,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 300,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            MODIFY COIN
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Converta moedas de forma rápida, simples e precisa.
          </Typography>
        </Box>

        <Box sx={{ py: 5 }}>
          <Container maxWidth="md">
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: "bold",
                fontSize: "2.2rem",
                color: "#000000",
              }}
            >
              Nosso serviço
            </Typography>

            <Typography
              align="center"
              sx={{
                mt: 1,
                mb: 4,
                color: "#000000",
              }}
            >
              Conheça o que podemos fazer por você
            </Typography>

            <Grid container justifyContent="center">
              <Grid item>
                <Card
                  sx={{
                    width: 400,
                    minHeight: 320,
                    borderRadius: 4,
                    boxShadow: 4,
                    textAlign: "center",
                    p: 2,
                    bgcolor: "#FFFFFF",
                  }}
                >
                  <CardContent>
                    <Box
                      component="img"
                      src="https://static.vecteezy.com/ti/vetor-gratis/p1/14801020-conversor-de-dinheiro-na-moda-vetor.jpg"
                      alt="Conversão de moedas"
                      sx={{
                        width: 160,
                        height: 160,
                        objectFit: "contain",
                        mb: 2,
                        color: "#000000",
                      }}
                    />

                    <Typography 
                      variant="body1"
                      sx={{
                        color: "#000000"
                      }}
                
                    >
                      O Modify Coin é um sistema de conversão de moedas que permite 
                      calcular valores entre diferentes moedas de forma simples e rápida.
                      O usuário informa o valor, escolhe as moedas desejadas e o sistema 
                      e o sistema exibe o resultado da conversão automaticamente.
                    </Typography>

                  </CardContent>

                </Card>

              </Grid>
            </Grid>

          </Container>

        </Box>
      </Box>
    </Box>

  );
}

