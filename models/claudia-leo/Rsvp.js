import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClaudiaLeoRsvpSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  address: {
    type: String
  }
});

module.exports =
  mongoose.models.ClaudiaLeoRsvp ||
  mongoose.model("ClaudiaLeoRsvp", ClaudiaLeoRsvpSchema);
