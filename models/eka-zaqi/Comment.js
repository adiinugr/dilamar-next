import mongoose from "mongoose"
const Schema = mongoose.Schema

const EkaZakyCommentSchema = new Schema({
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
  mongoose.models.EkaZakyComment ||
  mongoose.model("EkaZakyComment", EkaZakyCommentSchema)
