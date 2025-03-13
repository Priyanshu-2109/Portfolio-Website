import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoute from "./routes/email.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ensure "/api/email" route is used
app.use("/api/email", emailRoute);

app.listen(PORT,"0.0.0.0", () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
