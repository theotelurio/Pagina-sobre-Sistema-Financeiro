# Modify Coin

Sistema web para conversão de moedas desenvolvido para a disciplina de Programação Visual utilizando React, Material UI e JavaScript.

O projeto tem como objetivo oferecer uma ferramenta prática para conversão monetária, além de disponibilizar conteúdo informativo sobre economia, moedas e mercado financeiro. O repositório permite que toda a equipe trabalhe simultaneamente no desenvolvimento da aplicação.

---

## Sobre o Projeto

O Modify Coin é uma aplicação financeira que realiza conversões entre diferentes moedas de forma rápida, simples e precisa.

Com o crescimento das transações internacionais, viagens e investimentos globais, tornou-se cada vez mais importante contar com uma ferramenta confiável para conversão monetária. Pensando nisso, o sistema foi desenvolvido para permitir que o usuário selecione uma moeda de origem, uma moeda de destino e um valor a ser convertido, obtendo o resultado com base nas taxas de câmbio atualizadas.

Além da funcionalidade principal, o sistema conta com:

- Página inicial informativa;
- Blog com conteúdos sobre economia e moedas;
- Página de contato integrada ao WhatsApp;
- Interface moderna e responsiva.

---

## Objetivos

- Realizar conversão entre diferentes moedas.
- Exibir resultados de forma clara e organizada.
- Disponibilizar uma interface intuitiva e responsiva.
- Aplicar conceitos de Programação Visual.
- Facilitar o acesso a informações financeiras relacionadas ao câmbio.
- Desenvolver uma aplicação moderna utilizando React e Material UI.

---

## Tecnologias Utilizadas

### React

Biblioteca JavaScript utilizada para construção da interface da aplicação através de componentes reutilizáveis, proporcionando melhor organização, manutenção e desempenho.

### Material UI (MUI)

Biblioteca baseada no Material Design utilizada para criação de interfaces modernas, responsivas e visualmente consistentes.

### JavaScript

Responsável pela implementação das funcionalidades, validações, integração com APIs e processamento das informações da aplicação.

### React Router DOM

Biblioteca utilizada para gerenciamento de rotas e navegação entre as páginas da aplicação.

### SweetAlert2

Utilizado para exibição de alertas e mensagens amigáveis ao usuário durante a utilização do sistema.

---

## Como Começar

Siga estas instruções para obter uma cópia do projeto em sua máquina local para desenvolvimento e testes.

### Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/) (que inclui o npm) instalado em sua máquina.

### Instalação

1.  Clone o repositório para a sua máquina local.

2.  Navegue até o diretório do projeto:
    ```sh
    cd Sistema-Financeiro
    ```

3.  Instale as dependências do projeto:
    ```sh
    npm install
    ```

4.  Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

Abra o endereço local que aparecer no seu terminal (geralmente `http://localhost:5173`) para visualizar o projeto no navegador.

---

## 🗺️ Estrutura de Rotas

A aplicação utiliza `react-router-dom` para gerenciar a navegação. Todas as páginas são renderizadas dentro de um `Layout` principal que contém o cabeçalho, o menu de navegação e o rodapé.



As seguintes rotas estão definidas no arquivo `src/App.jsx`:

- `/`: **Página Principal (Home)** - Componente: `Home.jsx`
- `/blog`: **Página do Blog** - Componente: `Blog.jsx`
- `/contato`: **Página de Contato** - Componente: `Contato.jsx`
- `/conversor`: **Página do Conversor** - Componente: `Conversor.jsx`

---

## Estrutura do Sistema

### Home

Página responsável por apresentar o sistema ao usuário.

**Funcionalidades:**

- Apresentação do projeto.
- Descrição do serviço oferecido.
- Destaque para a proposta do sistema.

---

### Blog

Página destinada à divulgação de conteúdos relacionados ao mercado financeiro.

**Temas abordados:**

- Câmbio.
- Conversão monetária.
- Economia mundial.
- Principais moedas do mundo.
- Mercado financeiro.

**Recursos:**

- Cards interativos.
- Imagens ilustrativas.
- Botão "Ler mais / Ler menos".

---

### Fale Conosco

Canal de comunicação entre usuários e equipe desenvolvedora.

**Funcionalidades:**

- Formulário de contato.
- Validação automática de e-mail.
- Feedback visual para erros.
- Integração direta com WhatsApp.
- Alertas utilizando SweetAlert2.

---

### Conversor de Moedas

Principal funcionalidade do sistema.

**Recursos disponíveis:**

- Seleção da moeda de origem.
- Seleção da moeda de destino.
- Entrada do valor para conversão.
- Conversão baseada em taxas atualizadas.
- Exibição instantânea do resultado.
- Validação de dados informados.

---

## Componentes Material UI Utilizados

### Layout e Navegação

- AppBar
- Toolbar
- Drawer
- List
- ListItem
- ListItemText

### Organização de Conteúdo

- Box
- Paper
- Stack

### Tipografia

- Typography

### Formulários

- TextField
- Button
- FormControl
- Select
- MenuItem

### Cards e Conteúdo

- Card
- CardMedia
- CardContent
- CardActions
- Collapse

---

## Principais Funcionalidades

- Conversão de moedas em tempo real.
- Integração com API de câmbio.
- Interface responsiva.
- Menu lateral de navegação.
- Blog informativo.
- Validação de formulários.
- Integração com WhatsApp.
- Feedback visual para erros e ações do usuário.
- Componentização utilizando React.

---

## Protótipo

Antes da implementação da versão final, foi desenvolvida uma etapa de prototipação para:

- Planejar a interface.
- Definir a experiência do usuário.
- Organizar os componentes.
- Validar a usabilidade.
- Reduzir retrabalho durante o desenvolvimento.

Essa etapa serviu como base para toda a construção da aplicação em React e Material UI.

---

## Resultados

O projeto atingiu os objetivos propostos, entregando:

- Conversão monetária funcional.
- Interface moderna e intuitiva.
- Navegação simplificada.
- Integração eficiente com API de câmbio.
- Código organizado através da componentização.
- Melhor experiência para o usuário.

A combinação entre React, Material UI e JavaScript mostrou-se eficiente para o desenvolvimento de uma aplicação web moderna e escalável.

---

## Equipe

- Filipe Farias Brasil de Oliveira
- João Pedro Gualberto Silva
- Izabela de Santos Albuquerque
- Luís Gustavo Braga de Sousa
- Rayssa Cristhiny Santos Baker
- Theo Coêlho Pereira
- Vanessa Ferreira do Nascimento

---

## Projeto Acadêmico

Desenvolvido no Instituto Federal de Educação, Ciência e Tecnologia de Rondônia (IFRO) – Campus Porto Velho Calama, para a disciplina de Programação Visual.

---

## Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.

---

# Modify Coin

**Converta moedas de forma rápida, simples e precisa.**
