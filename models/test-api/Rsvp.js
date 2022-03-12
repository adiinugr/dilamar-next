import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TestApiRsvpSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  message: {
    type: String
  }
});

module.exports =
  mongoose.models.TestApiRsvp ||
  mongoose.model("TestApiRsvp", TestApiRsvpSchema);
