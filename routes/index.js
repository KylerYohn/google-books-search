const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//for the API routes
router.use("", apiRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
