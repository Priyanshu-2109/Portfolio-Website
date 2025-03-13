import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoute from "./routes/email.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; // Use environment-provided port

app.use(cors());
app.use(express.json());

// Email Route
app.use("/api/email", emailRoute);

// ✅ Fix the app.listen issue
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
