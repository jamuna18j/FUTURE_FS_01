const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("node:path");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

app.get("/", (req, res) => {
  res.send("Jamuna Portfolio Backend is running!");
});

app.get("/api/health", (req, res) => {
  const connected = mongoose.connection.readyState === 1;

  return res.status(connected ? 200 : 503).json({
    status: connected ? "ok" : "unavailable",
    database: connected ? "connected" : "disconnected",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "Please fill in all fields.",
      });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        message: "Database is unavailable. Please try again later.",
      });
    }

    await Message.create({ name, email, subject, message });

    return res.status(201).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    return res.status(500).json({
      message: "Server error. Please try again.",
    });
  }
});

const startServer = async () => {
  if (!mongoUri) {
    throw new Error("MONGO_URI is required. Set it in backend/.env.");
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 8000,
      autoIndex: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully.");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error.name);
    });
};

startServer().catch((error) => {
  console.error("Backend startup failed:", error.message);
  process.exitCode = 1;
});
