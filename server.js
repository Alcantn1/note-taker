const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});