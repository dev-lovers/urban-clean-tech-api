# Urban Clean Tech API

Um servidor Node.js em TypeScript utilizando `Express`, `Socket.IO` e `Redis` para monitoramento e transmissão de coordenadas GPS. Este projeto é executado em containers Docker, com Redis gerenciado pelo Docker Compose.

## Funcionalidades

- **Express** para gerenciar a API.
- **Socket.IO** para comunicação em tempo real com os clientes.
- **Redis** para armazenamento de dados em cache, especialmente coordenadas GPS.
- Configuração via Docker Compose para fácil implantação e gerenciamento dos containers.

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

1. **Inicie os containers** com Docker Compose:

   ```bash
   docker-compose up --build
   ```

2. O servidor estará disponível em [http://localhost:4000](http://localhost:4000).

### Endpoints

- **`GET /`** - Endpoint para verificar se o servidor está rodando. Deve retornar `Servidor de GPS rodando!`.

### Socket.IO Eventos

- **`coordenadas`**: Enviado pelo cliente com um objeto `{ lat: number, lng: number }`. O servidor armazena as coordenadas no Redis e retransmite para todos os clientes conectados.
- **`atualizarCoordenadas`**: Evento de broadcast para enviar as coordenadas mais recentes a todos os clientes conectados.

## Comandos Úteis

- **Instalar dependências**: `npm install`
- **Compilar TypeScript**: `npm run build`
- **Iniciar servidor localmente** (fora do Docker): `npm start`
- **Iniciar com Docker Compose**: `docker-compose up --build`
- **Encerrar containers**: `docker-compose down`

## Observações

- Certifique-se de que o arquivo `.env` está corretamente configurado antes de executar o Docker Compose.
- Este projeto foi testado com Node.js versão 18 e Redis 7.