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

module.exports = router;