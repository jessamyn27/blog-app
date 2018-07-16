const express = require('express');
const router  = express.Router();
const Article  = require('../models/articles');

router.get('/', (req, res) => {
  Article.find({}, (err, foundArticles) => {
      res.render('articles/index.ejs', {
        articles: foundArticles
      });
  });

});

router.get('/new', (req, res) => {
  res.render('articles/new.ejs');
});


router.get('/:id', (req, res) => {
  Article.findById(req.params.id, (err, foundArticle) => {
    res.render('articles/show.ejs', {
      article: foundArticle
    });
  });
});

router.get('/:id/edit', (req, res) => {

  Article.findById(req.params.id, (err, foundArticle) => {
    res.render('articles/edit.ejs', {
      article: foundArticle
    });
  });
});

router.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateArticle)=> {
    console.log(updateArticle, ' this is updateArticle');
    res.redirect('/articles');
  });
});


router.post('/', (req, res) => {
  console.log(req.body)
  Article.create(req.body, (err, createdArticle) => {
    console.log(createdArticle, ' this is the createdArticle');
    res.redirect('/articles');
  });
});


router.delete('/:id', (req, res) => {

  Article.findByIdAndRemove(req.params.id, (err, deletedArticle) => {
    console.log(deletedArticle, ' this is deletedArticle');
    res.redirect('/articles')
  })
});



module.exports = router;
