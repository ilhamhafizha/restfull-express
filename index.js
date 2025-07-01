// index.js

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
const todosRouter = require('./routes/todosRoute');
app.use('/api/todos', todosRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
