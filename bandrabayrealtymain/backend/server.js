//backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
// import contactRoutes from "./routes/contactRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";

dotenv.config();
//this is just a test message ignore 

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
// app.use("/api/contact", contactRoutes);
app.use("/api/media", mediaRoutes);

// test check
app.get("/", (req, res) => {
  res.send("API running...");
});

// start server
const PORT = 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Yo Server running on port ${PORT}`);
  });
};

startServer();