const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// const port = 3000;
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});