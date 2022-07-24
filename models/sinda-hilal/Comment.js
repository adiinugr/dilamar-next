import mongoose from "mongoose"
const Schema = mongoose.Schema

const SindaHilalCommentSchema = new Schema({
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
  mongoose.models.SindaHilalComment ||
  mongoose.model("SindaHilalComment", SindaHilalCommentSchema)
