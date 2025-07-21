const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running.', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('Post request received.');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
