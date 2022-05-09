import mongoose from "mongoose"
const Schema = mongoose.Schema

const AyuIqbalCommentSchema = new Schema({
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
  mongoose.models.AyuIqbalComment ||
  mongoose.model("AyuIqbalComment", AyuIqbalCommentSchema)
