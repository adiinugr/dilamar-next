import mongoose from "mongoose"
const Schema = mongoose.Schema

const AyuIqbalRsvpSchema = new Schema({
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
  mongoose.models.AyuIqbalRsvp ||
  mongoose.model("AyuIqbalRsvp", AyuIqbalRsvpSchema)
