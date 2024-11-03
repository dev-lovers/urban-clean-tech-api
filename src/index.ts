import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient
  .connect()
  .catch((error) => console.error("Erro ao conectar ao Redis:", error));

const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor de GPS rodando!");
});

io.on("connection", (socket) => {
  console.log("Novo cliente conectado:", socket.id);

  socket.on("coordenadas", async (data: { lat: number; lng: number }) => {
    try {
      await redisClient.set("ultima_coordenada", JSON.stringify(data));
      io.emit("atualizarCoordenadas", data);
      console.log("Coordenadas recebidas e retransmitidas:", data);
    } catch (error) {
      console.error("Erro ao armazenar ou transmitir coordenadas:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
