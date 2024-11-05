import http from "http";
import dotenv from "dotenv";
import app from "./app";
import initializeSocket from "./socket/socket";

dotenv.config();

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

initializeSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
