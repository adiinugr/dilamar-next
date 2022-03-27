import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClaudiaLeoCommentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

module.exports =
  mongoose.models.ClaudiaLeoComment ||
  mongoose.model("ClaudiaLeoComment", ClaudiaLeoCommentSchema);
