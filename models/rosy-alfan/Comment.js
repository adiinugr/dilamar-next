import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RosyAlfanCommentSchema = new Schema({
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
  mongoose.models.RosyAlfanComment ||
  mongoose.model("RosyAlfanComment", RosyAlfanCommentSchema);
