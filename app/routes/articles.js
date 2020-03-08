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

router.get('/api/articles/:id', (req, res) => {
   Article.findById(req.params.id)
       .then(article => {
            if(article){
                res.status(200).json({article});
            } else {
                res.status(404).json({error: {
                    name: 'Document not found',
                    message: 'The provided ID doesn\'t match any documents',
                    }});
            }
       })
       .catch(error => {
           res.status(500).json({error})
       });
});

router.delete('/api/articles/:id', (req, res) =>  {
    Article.findById(req.params.id)
        .then(article => {
            if(article)  {
                return article.remove();
            } else {
                res.status(404).json({error: {
                        name: 'Document not found',
                        message: 'The provided ID doesn\'t match any documents',
                    }});
            }
        })
        .then(() =>  {
            res.status(204).end();
        })
        .catch(error => {
            res.status(500).json(error);
        })
});
module.exports = router;