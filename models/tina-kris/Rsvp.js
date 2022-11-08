import mongoose from "mongoose"
const Schema = mongoose.Schema

const TinaKrisRsvpSchema = new Schema({
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
})

module.exports =
  mongoose.models.TinaKrisRsvp ||
  mongoose.model("TinaKrisRsvp", TinaKrisRsvpSchema)
