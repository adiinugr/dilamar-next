import mongoose from "mongoose"
const Schema = mongoose.Schema

const TinaKrisCommentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

module.exports =
  mongoose.models.TinaKrisComment ||
  mongoose.model("TinaKrisComment", TinaKrisCommentSchema)
