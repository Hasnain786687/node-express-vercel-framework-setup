// Import packages
const express = require("express");
const path = require('path');


// Middlewares
const app = express();
app.use(express.json());

// Routes

app.use('/', express.static('routes'));
app.use('/', express.static('views'));
app.use('/', express.static('views/index'));

app.use('/views', express.static(path.join(__dirname, '/routes/views')));

app.set('view engine', 'hbs');
  

  app.get('/', (req, res) => {
    res.redirect('views');
  });











// connection
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening to port ${port}`));
