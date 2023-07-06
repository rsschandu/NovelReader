const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const novelRoutes = require('./routes/novelRoutes');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://strawhat:strawhat@devcluster.wcjute4.mongodb.net/Novel_Application";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/novels');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// novel routes
app.use('/novels', novelRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});