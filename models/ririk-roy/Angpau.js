import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RirikRoyAngpauSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bank: {
    type: String,
    required: true,
  },
  nominal: {
    type: String,
  },
});

module.exports =
  mongoose.models.RirikRoyAngpau ||
  mongoose.model("RirikRoyAngpau", RirikRoyAngpauSchema);
