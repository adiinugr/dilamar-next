import mongoose from "mongoose"
const Schema = mongoose.Schema

const EkaZakyRsvpSchema = new Schema({
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
})

module.exports =
  mongoose.models.EkaZakyRsvp ||
  mongoose.model("EkaZakyRsvp", EkaZakyRsvpSchema)
