# Pagina-sobre-Sistema-Financeiro
Repositório do projeto de uma página sobre sistema financeiro para a matéria de Programação Visual. O objetivo é permitir que o grupo compartilhe e trabalhe simultaneamente no sistema web do projeto.

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

## 🗺️ Estrutura de Rotas

A aplicação utiliza `react-router-dom` para gerenciar a navegação. Todas as páginas são renderizadas dentro de um `Layout` principal que contém o cabeçalho, o menu de navegação e o rodapé.

As seguintes rotas estão definidas no arquivo `src/App.jsx`:

- `/`: **Página Principal (Home)** - Componente: `Home.jsx`
- `/blog`: **Página do Blog** - Componente: `Blog.jsx`
- `/contato`: **Página de Contato** - Componente: `Contato.jsx`
- `/conversor`: **Página do Conversor** - Componente: `Conversor.jsx`
