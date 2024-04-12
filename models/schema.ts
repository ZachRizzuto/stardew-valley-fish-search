import mongoose from "mongoose";

const fishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  sellPrice: {
    type: mongoose.Schema.Types.Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  usedIn: {
    type: mongoose.Schema.Types.Array,
    required: false,
  },
  weather: {
    type: String,
    required: true,
  },
});

const Fish = mongoose.model("Fish", fishSchema);

module.exports = Fish;
