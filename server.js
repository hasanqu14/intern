const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const data = require('./data.json');

app.use(cors());

// Get user info
app.get('/api/user', (req, res) => {
  res.json(data.user);
});

// Get leaderboard
app.get('/api/leaderboard', (req, res) => {
  res.json(data.leaderboard);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
