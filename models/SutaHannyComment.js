import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SutaHannyCommentSchema = new Schema({
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
  mongoose.models.SutaHannyComment ||
  mongoose.model("SutaHannyComment", SutaHannyCommentSchema);
