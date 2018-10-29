const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./server/routes/user');


const app = express();
const port = process.env.PORT || 8888;

/*MongoCreds*/
const DB_name = 'userManagment';
const DB_port = 27017;
const host = 'localhost';

//Using bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*Set routing*/
app.use("/user", userRoutes);

// Start server
app.listen(port, () => console.info(`Server is running on: ${port}`));

// Connect db
mongoose.connect(`mongodb://${host}:${DB_port}/${DB_name}`, { useNewUrlParser: true }, function(err) {
  if (err) return console.log(err);

  console.info("Mongo connection established");
});
