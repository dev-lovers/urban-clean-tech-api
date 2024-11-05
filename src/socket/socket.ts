import { Server as HttpServer } from "http";
import { Server, Namespace } from "socket.io";
import handleGpsEvents from "./events/gpsEvents";

const initializeSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  const gpsNamespace: Namespace = io.of("/gps");

  gpsNamespace.on("connection", (socket) => {
    // console.log(`Client connected to namespace /gps: ${socket.id}`);

    handleGpsEvents(socket, gpsNamespace);

    socket.on("disconnect", () => {
      // console.log(`Client disconnected from namespace /gps: ${socket.id}`);
    });
  });

  return io;
};

export default initializeSocket;
