const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Path to your new route file

const app = express();

// Middleware
app.use(bodyParser.json()); // For parsing JSON payloads

// Database Connection
mongoose.connect('your-mongo-db-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection error:', err));

// Routes
app.use('/api', authRoutes); // Register your routes with a base path (e.g., /api/register)

// Start the Server
const PORT = 5000; // Or any other port you want
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
