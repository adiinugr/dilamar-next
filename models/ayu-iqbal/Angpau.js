import mongoose from "mongoose"
const Schema = mongoose.Schema

const AyuIqbalAngpauSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bank: {
    type: String,
    required: true
  },
  nominal: {
    type: String
  }
})

module.exports =
  mongoose.models.AyuIqbalAngpau ||
  mongoose.model("AyuIqbalAngpau", AyuIqbalAngpauSchema)
