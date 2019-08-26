const mongoose = require("mongoose")

const PointSchema = new mongoose.Schema({
  name: String,
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number
  }
})

const TrackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    default: ""
  },
  locations: [PointSchema]
})

mongoose.model("Track", TrackSchema)
