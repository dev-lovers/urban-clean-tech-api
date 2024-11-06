import { Socket, Namespace } from "socket.io";
import redisClient from "../../config/redisConfig";

interface GpsData {
  name: string;
  type: string;
  latitude: number;
  longitude: number;
}

const handleGpsEvents = (socket: Socket, gpsNamespace: Namespace) => {
  socket.on("coordinates", async (data: GpsData[]) => {
    try {
      const previousCoords = await redisClient.get("last_coordinates");

      if (previousCoords !== JSON.stringify(data)) {
        await redisClient.set("last_coordinates", JSON.stringify(data));

        gpsNamespace.emit("updateCoordinates", data);
      }
    } catch (error) {
      console.error("Error updating or transmitting coordinates:", error);
    }
  });
};

export default handleGpsEvents;
