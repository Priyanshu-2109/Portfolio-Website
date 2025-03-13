import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoute from "./routes/email.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Email Route
app.use("/api/email", emailRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
