const express = require("express")
const requireAuth = require("../middlewares/requireAuth")
const TracksController = require("../controllers/tracks-controllers")
const router = express.Router()

router.use(requireAuth)

//  get all tracks route
router.get("/tracks", TracksController.getAllTracks)

//  create track route
router.post("/tracks", TracksController.createTrack)

module.exports = router
