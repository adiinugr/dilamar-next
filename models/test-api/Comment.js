import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TestApiSchema = new Schema({
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
  mongoose.models.TestApi || mongoose.model("TestApi", TestApiSchema);
