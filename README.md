# Urban Clean Tech API

Um servidor Node.js em TypeScript que utiliza `Express`, `Socket.IO` (com namespaces) e `Redis` para monitoramento e transmissão de coordenadas GPS. Este projeto é executado em contêineres Docker, com o Redis sendo gerenciado pelo Docker Compose.

## Funcionalidades

- **Express** para gerenciar a API.
- **Socket.IO** com namespace `/gps` para comunicação em tempo real.
- **Redis** para armazenamento em cache das coordenadas GPS.
- Contêineres Docker para fácil implantação, com Redis gerenciado via Docker Compose.

## Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **Socket.IO**
- **Redis**
- **Docker** e **Docker Compose**

## Configuração e Execução

### Pré-requisitos

- **Docker** e **Docker Compose** instalados na máquina.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/dev-lovers/urban-clean-tech-api.git
   cd urban-clean-tech-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Compile o código TypeScript:

   ```bash
   npm run build
   ```

### Executando com Docker

1. **Inicie os contêineres** com Docker Compose:

   ```bash
   docker-compose up --build
   ```

2. O servidor estará disponível em [http://localhost:4000](http://localhost:4000).

## Endpoints da API

As rotas da API estão organizadas sob o prefixo `/api` para padronização:

- **`GET /api/status`** - Retorna o status do servidor. Deve responder com `{ message: "Server running!" }`.

## Eventos do Socket.IO

O Socket.IO agora utiliza um namespace específico `/gps` para comunicação em tempo real com os clientes.

## Comandos Úteis

- **Instalar dependências**: `npm install`
- **Compilar TypeScript**: `npm run build`
- **Iniciar servidor localmente** (fora do Docker): `npm start`
- **Iniciar com Docker Compose**: `docker-compose up --build`
- **Encerrar contêineres**: `docker-compose down`

## Observações

- Certifique-se de que o arquivo `.env` está corretamente configurado antes de executar o Docker Compose.
- Este projeto foi testado com Node.js versão 18 e Redis 7.
