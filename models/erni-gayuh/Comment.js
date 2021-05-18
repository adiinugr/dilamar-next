import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ErniGayuhCommentSchema = new Schema({
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
  mongoose.models.ErniGayuhComment ||
  mongoose.model("ErniGayuhComment", ErniGayuhCommentSchema);
