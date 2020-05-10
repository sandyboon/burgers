const express = require('express');
const apiRouter = require('./controllers/burgers_controller');

//create the app
const app = express();

//set up middleware to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve up static content
app.use(express.static('public'));

app.use('/app', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
