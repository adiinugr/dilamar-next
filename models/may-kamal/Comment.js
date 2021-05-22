import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MayKamalCommentSchema = new Schema({
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
  mongoose.models.MayKamalComment ||
  mongoose.model("MayKamalComment", MayKamalCommentSchema);
