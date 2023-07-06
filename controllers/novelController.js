const Novel = require('../models/novel');

const novel_index = (req, res) => {
  Novel.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { novels: result, title: 'All novels' });
    })
    .catch(err => {
      console.log(err);
    });
}

const novel_details = (req, res) => {
  const id = req.params.id;
  Novel.findById(id)
    .then(result => {
      res.render('details', { novel: result, title: 'Novel Details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'Novel not found' });
    });
}

const novel_create_get = (req, res) => {
  res.render('create', { title: 'Create a new novel' });
}

const novel_create_post = (req, res) => {
  const novel = new Novel(req.body);
  novel.save()
    .then(result => {
      res.redirect('/novels');
    })
    .catch(err => {
      console.log(err);
    });
}

const novel_delete = (req, res) => {
  const id = req.params.id;
  Novel.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/novels' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  novel_index, 
  novel_details, 
  novel_create_get, 
  novel_create_post, 
  novel_delete
}