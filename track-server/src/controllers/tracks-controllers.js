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

module.exports = {
  getAllTracks
}
