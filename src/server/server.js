const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// serve the frontend
app.use(express.static(path.resolve(__dirname, '../../dist')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
