import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NurulRegaCommentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.NurulRegaComment ||
  mongoose.model("NurulRegaComment", NurulRegaCommentSchema);
