const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const carsRoutes = require('./routes/cars');
app.use('/cars', carsRoutes);

const homeRoutes = require('./routes/home');
app.use('/', homeRoutes);

app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
