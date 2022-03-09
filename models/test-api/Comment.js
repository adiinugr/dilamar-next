import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TestApiCommentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

module.exports =
  mongoose.models.TestApiComment ||
  mongoose.model("TestApiComment", TestApiCommentSchema);
