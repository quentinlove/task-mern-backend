const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./connect/database');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Make sure this matches your actual env var name

// Connect to DB
connectDB();

// Use CORS before your routes
app.use(cors());

// Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Custom error handler
app.use(errorHandler);

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
