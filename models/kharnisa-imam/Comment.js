import mongoose from "mongoose";
const Schema = mongoose.Schema;

const KharnisaImamCommentSchema = new Schema({
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
  mongoose.models.KharnisaImamComment ||
  mongoose.model("KharnisaImamComment", KharnisaImamCommentSchema);
