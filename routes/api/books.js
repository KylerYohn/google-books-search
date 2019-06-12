const router = require("express").Router();
const booksController = require("../../controllers/bookController");

router
  .route("/api/saved")
  .get(booksController.findAll)
  .post(booksController.create);

  .route("/api/saved/:id")
  .delete()
module.exports = router;
