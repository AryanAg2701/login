const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  site: String,
  username: String,
  password: String,
});

module.exports = mongoose.model('Password', passwordSchema);
