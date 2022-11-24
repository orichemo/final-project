const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
require('dotenv').config({ path: './.env' });

const { PORT = 3000 } = process.env;
const { MONGO_URL = 'mongodb://localhost:27017/mydb' } = process.env;
const router = require('./routes/index');
const { requestLog, errorLog } = require('./middleware/logger');
const error = require('./middleware/errors');
const limiter = require('./middleware/limiter');

app.use(cors());
app.options('*', cors());

app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLog);
app.use(router);
app.use(errorLog);
app.use(errors());
app.use(error);

mongoose.connect(MONGO_URL);
app.listen(PORT);
