import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MettaAdiCommentSchema = new Schema({
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
  mongoose.models.MettaAdiComment ||
  mongoose.model("MettaAdiComment", MettaAdiCommentSchema);
