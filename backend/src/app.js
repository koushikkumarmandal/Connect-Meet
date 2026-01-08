import express from "express";
import { createServer } from "http"; 
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import connectToSocket from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";



const app = express();
const server = createServer(app);
const io =connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));


app.use("/api/v1/users", userRoutes);


app.set("mongo_user")
const connectionDb = await mongoose.connect("mongodb+srv://koushikmandal712122_db_user:tBqM5S9y5yBRgOKK@cluster0.83p4aan.mongodb.net/?appName=Cluster0");
console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`);



server.listen(app.get("port"), () => {
    console.log("LISTENIN ON PORT 8000");
});


