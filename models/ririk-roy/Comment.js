import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RirikRoyCommentSchema = new Schema({
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
  mongoose.models.RirikRoyComment ||
  mongoose.model("RirikRoyComment", RirikRoyCommentSchema);
