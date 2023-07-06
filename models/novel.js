const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const novelSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Novel = mongoose.model('Novel', novelSchema);
module.exports = Novel;