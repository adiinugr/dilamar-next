import mongoose from "mongoose"
const Schema = mongoose.Schema

const LailaBramCommentSchema = new Schema({
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
  mongoose.models.LailaBramComment ||
  mongoose.model("LailaBramComment", LailaBramCommentSchema)
