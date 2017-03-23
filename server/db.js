const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blog')

const articleSchema = new mongoose.Schema({
  title: String,
  // date: Date,
  content: String,
  gist: String
})

const Models = {
  Article: mongoose.model('Article', articleSchema)
}

module.exports = Models
