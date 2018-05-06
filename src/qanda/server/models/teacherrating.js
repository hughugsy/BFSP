import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const trSchema = new Schema({
  path: { type: 'String', required: true },
  name: {type: 'String', required: true},
  grading: {type: 'Number', required: true},
  teaching: {type: 'Number', required: true},
  workload: {type: 'Number', required: true},
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('TeacherRating', trSchema);
