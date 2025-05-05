const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Initialize dotenv for environment variables
dotenv.config();

// Database connection
require("./models/DBconfig.js").dbconnection();

const app = express();

// ✅ CORS Configuration (Correct Placement and Setup)
const corsOptions = {
  origin: [
    'http://localhost:5173',  // Local development
    'https://tech-forcingfrnt.vercel.app'  // Production frontend
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

// ✅ Handle preflight requests globally BEFORE routes
// app.options('*', cors(corsOptions));

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));  // Authentication routes
app.use("/api/jobs", require("./routes/jobs"));  // Jobs-related routes

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
