const express = require("express")
const requireAuth = require("../middlewares/requireAuth")
const TracksController = require("../controllers/tracks-controllers")
const router = express.Router()

router.use(requireAuth)

//  get all tracks route
router.get("/tracks", TracksController.getAllTracks)

//  signin route
// router.post("/signin", TracksController.signin)

module.exports = router
