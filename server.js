const express = require('express')
const dotenv = require('dotenv').config();
const {errorHandler }= require('./middleware/errorMiddleware');
const port = process.env.port || 5000;
const connectDB = require('./connect/database');
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler)
app.listen(port, ()=> console.log(`Server listening on ${port}`)); 