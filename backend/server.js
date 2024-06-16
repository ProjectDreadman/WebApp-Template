const express = require('express');
const app = express();
const port = 5000;

// Example API route
app.get('/', (req, res) => {
  res.send('Hello World from WebApp-Template Backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
