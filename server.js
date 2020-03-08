const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require('./app/routes/index');
const articlesRouter = require('./app/routes/articles');

const db = require('./config/db');
mongoose.connect(db, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
   console.log('Connected to Mongo');
});

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use(indexRouter);
app.use(articlesRouter);

app.listen(port, () => {
   console.log(`Blogy is listening on port ${port}`);
});