const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Article', articleSchema);
