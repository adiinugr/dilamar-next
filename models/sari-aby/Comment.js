import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SariAbyCommentSchema = new Schema({
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
  mongoose.models.SariAbyComment ||
  mongoose.model("SariAbyComment", SariAbyCommentSchema);
