const express = require('express');
const connectDB = require('./config/db');
const transactions = require('./routes/transactions');
const cors = require('cors');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));