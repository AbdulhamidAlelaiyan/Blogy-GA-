const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require('./app/routes/index');

const app = express();


const port = process.env.PORT || 5000;

app.use(indexRouter);

app.listen(port, () => {
   console.log(`Blogy is listening on port ${port}`);
});