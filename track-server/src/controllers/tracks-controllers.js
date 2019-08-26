const mongoose = require("mongoose")

const Track = mongoose.model("Track")

const getAllTracks = async (req, res) => {
  /**
   * Since we have attached the middleware of requireAuth middleware
   * we have the access to complete user object at req.user
   * Therefore,  here we are extracting the user's id from this object.
   */
  const userId = req.user._id
  const lists = await Track.find({ userId })
  res.send(lists)
}

const createTrack = async (req, res) => {
  const { name, locations } = req.body
  if (!name || !locations)
    return res
      .status(422)
      .send({ error: "You must provide name and some locations" })
  try {
    const track = new Track({ name, locations, userId: req.user._id })
    await track.save()
    res.status(200).send(track)
  } catch (err) {
    res.status(422).send({ error: "Something went wrong!", err })
  }
}

module.exports = {
  getAllTracks,
  createTrack
}
