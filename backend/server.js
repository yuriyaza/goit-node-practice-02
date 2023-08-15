const express = require('express');
const path = require('path');
const configPath = path.join(__dirname, '..', 'config', '.env');
require('dotenv').config({ path: configPath });
const connectDb = require('../config/connectDb');
require('colors');
const app = express();
const errorHandler=require('./middlewares/errorHandler')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// console.log(process.env.PORT);
// console.log(process.env.DB_HOST);
// console.log(process.env.USER);

app.use('/api/v1', require('./routes/carsRoutes'));
app.use(errorHandler);

connectDb();
app.listen(process.env.PORT, () => {
  console.log(`Server is runing on port ${process.env.PORT}`.green.italic.bold);
});
