const express = require('express');

const router = express.Router();
const Article = require('../models/article');

router.get('/api/articles', (req, res) => {
   Article.find()
       .then(articles => {
       res.status(200).json({
           articles
       });
   })
       .catch(error => {
           res.status(500).json({
               error
           });
       });
});

router.post('/api/articles', (req, res) => {
    Article.create(req.body.article)
        .then((newArticle) => {
            res.status(201).json({article: newArticle})
        })
        .catch((error) => {
            res.send(500).json(error);
        });
});

module.exports = router;