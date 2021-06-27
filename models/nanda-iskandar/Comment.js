import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NandaIskandarCommentSchema = new Schema({
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
  mongoose.models.NandaIskandarComment ||
  mongoose.model("NandaIskandarComment", NandaIskandarCommentSchema);
