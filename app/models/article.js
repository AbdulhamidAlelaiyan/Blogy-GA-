const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
   title: {type: String, required: true},
    content: true,
    author: {type: string, required: true},
    published: {type: boolean, default: true},
    publishedOn: {type: Date, default: Date.now()},

}, {timestamps: true,});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;