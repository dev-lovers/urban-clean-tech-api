import { Socket, Namespace } from "socket.io";
import redisClient from "../../config/redisConfig";

const handleGpsEvents = (socket: Socket, gpsNamespace: Namespace) => {
  socket.on("coordinates", async (data: { lat: number; lng: number }) => {
    try {
      const previousCoords = await redisClient.get("last_coordinate");

      if (previousCoords !== JSON.stringify(data)) {
        await redisClient.set("last_coordinate", JSON.stringify(data));
        gpsNamespace.emit("updateCoordinates", data);
      }
    } catch (error) {
      console.error("Error updating or transmitting coordinates:", error);
    }
  });
};

export default handleGpsEvents;
