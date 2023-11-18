// Import packages
const express = require("express");
const home = require("./routes/home");
const path = require('path');


// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

app.use('/', express.static('routes'));
app.use('/', express.static('homes'));
app.use('/', express.static('homes/index'));

app.use('/homes', express.static(path.join(__dirname, '/routes/homes')));


app.use('/', (req, res, next) => {
    res.redirect('/homes');
  });
  

// connection
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening to port ${port}`));
