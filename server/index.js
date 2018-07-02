const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Register API middleware.
app.use('/api/item', require('./api/item'));
app.use('/api/price', require('./api/price'));
app.use('/api/climate', require('./api/climate'));
app.use('/api/location', require('./api/location'));
app.use('/api/nutrients', require('./api/nutrients'));

// Serve custom static non-React content.
app.use('/custom', express.static(path.join(__dirname, '../client/custom/dist')));

if (ENV === 'production') {
  // Serve static files from the React app.
  // For any other request, match one above, serve React's index.html file.
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use((req, res) => { 
    res.sendFile(path.join(__dirname + '/../client/build/index.html')); 
  });
}

var db = require('./database');
db.query('SELECT NOW()', (err, res) => {
  if (err.error)
    return console.log(err.error);
  console.log(`PostgreSQL connected: ${res[0].now}.`);
});

app.listen(PORT, () => { 
  console.log(`Server listening on port ${PORT}...`); 
});

module.exports = app;
