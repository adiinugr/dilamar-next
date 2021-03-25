import mongoose from "mongoose";
const Schema = mongoose.Schema;

const KharnisaImamRsvpSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.KharnisaImamRsvp ||
  mongoose.model("KharnisaImamRsvp", KharnisaImamRsvpSchema);
