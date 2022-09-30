const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(__dirname, 'dist') });
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});