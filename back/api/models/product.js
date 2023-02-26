const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productName: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  category: { type: String },
  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
