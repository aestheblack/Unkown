const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  quantity: { type: Number, default: 0 },
  price: { type: Number, required: true },
});
module.exports = mongoose.model('Product', productSchema);
