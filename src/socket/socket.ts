import { Server as HttpServer } from "http";
import { Server, Namespace } from "socket.io";
// import jwt, { JwtPayload } from "jsonwebtoken";
import handleGpsEvents from "./events/gpsEvents";

const initializeSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  const gpsNamespace: Namespace = io.of("/gps");

  // gpsNamespace.use((socket, next) => {
  //   const token = socket.handshake.auth.token;
  //   const origin = socket.handshake.headers.origin;

  //   if (origin === "https://wokwi.com") {
  //     return next();
  //   }

  //   if (!token) {
  //     return next(new Error("Acesso negado. Token não fornecido."));
  //   }

  //   jwt.verify(
  //     token,
  //     "YOUR_SECRET_KEY",
  //     (err: Error | null, decoded: string | JwtPayload | undefined) => {
  //       if (err) {
  //         return next(new Error("Falha na autenticação do token."));
  //       }
  //       (socket as any).user = decoded;
  //       next();
  //     }
  //   );
  // });

  gpsNamespace.on("connection", (socket) => {
    console.log(`Client connected to namespace /gps: ${socket.id}`);

    handleGpsEvents(socket, gpsNamespace);

    socket.on("disconnect", () => {
      console.log(`Client disconnected from namespace /gps: ${socket.id}`);
    });
  });
};

export default initializeSocket;
