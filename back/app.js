const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const userRouter = require('./api/routes/user');
const clientRouter = require('./api/routes/client');

mongoose.set('strictQuery', true);
mongoose.connect(
	`mongodb+srv://mtseo:${process.env.DB_PWD}@cluster0.nxorzkg.mongodb.net/quotation?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
	},
);

app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/clients', clientRouter);

module.exports = app;
