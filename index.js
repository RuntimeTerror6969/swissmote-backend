import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./Config/dataBase.js";
import { initializeSocket } from "./utils/Socket.js";
import http from "http";
import cors from "cors";

dotenv.config(); // Remove path since .env is in root directory

// Add CORS middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

const server = http.createServer(app);
connectDB();
initializeSocket(server);

server.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
});
