const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Initialize dotenv for environment variables
dotenv.config();

// Database connection
require("./models/DBconfig.js").dbconnection();

const app = express();

// CORS Configuration
app.use(cors({
  origin: 'https://tech-forcingfrnt.vercel.app', // allow your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if you're using cookies/auth headers
}));
// app.use(cors(corsOptions));

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));  // Authentication routes
app.use("/api/jobs", require("./routes/jobs"));  // Jobs-related routes

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
