const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Initialize dotenv for environment variables
dotenv.config();

// Database connection
require("./models/DBconfig.js").dbconnection();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "https://tech-forcingfrnt.vercel.app",  // Frontend URL (ensure this matches your frontend URL)
  // origin: "http://localhost:5173",  // Frontend URL (ensure this matches your frontend URL)
  credentials: true,               // Enable cookies/credentials for cross-origin requests
};
app.use(cors(corsOptions));

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));  // Authentication routes
app.use("/api/jobs", require("./routes/jobs"));  // Jobs-related routes

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
