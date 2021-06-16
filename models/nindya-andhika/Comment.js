import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NindyaAndhikaCommentSchema = new Schema({
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
  mongoose.models.NindyaAndhikaComment ||
  mongoose.model("NindyaAndhikaComment", NindyaAndhikaCommentSchema);
