import express from "express";
import redirectRoutes from "./routes/redirectRoutes";
import apiRoutes from "./routes/apiRoutes";

const app = express();

app.use(express.json());

app.use("/", redirectRoutes);

app.use("/api", apiRoutes);

export default app;
