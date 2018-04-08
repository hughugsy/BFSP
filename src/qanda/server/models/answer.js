import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  content: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Answer', answerSchema);
