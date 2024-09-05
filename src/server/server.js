const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// serve the frontend
app.use(express.static(path.resolve(__dirname, '../../dist')));

// testing post request for login/signup


// catch all
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
