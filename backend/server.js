import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';

import messageRoutes from "./routes/message.routes.js"
import authRoutes from "./routes/auth.routes.js";
import userRoutes from  "./routes/user.routes.js";


import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";



// Parse JSON bodies
const PORT = process.env.PORT || 5000;
dotenv.config();



// app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json()); // to parse the incoming request wtih JSON payloads(from req.body)

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello World!!");
// });


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on PORT ${PORT}`);
});



