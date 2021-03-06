import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bsSchema = new Schema({
  tags: [],
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  price: { type: 'Number', required: true },
  contact: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('BuyAndSell', bsSchema);
