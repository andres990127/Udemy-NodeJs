const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/post');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => console.log('DB Connection error '+ err));

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', postRoutes);

const port = process.env.PORT || 3030;
app.listen(port, () =>{
    console.log('Server listening on port ' + port);
});