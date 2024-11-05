import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient
  .connect()
  .catch((error) => console.error("Error connecting to Redis:", error));

export default redisClient;
