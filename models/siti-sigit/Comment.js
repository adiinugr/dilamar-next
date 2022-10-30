import mongoose from "mongoose"
const Schema = mongoose.Schema

const SitiSigitCommentSchema = new Schema({
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
  mongoose.models.SitiSigitComment ||
  mongoose.model("SitiSigitComment", SitiSigitCommentSchema)
