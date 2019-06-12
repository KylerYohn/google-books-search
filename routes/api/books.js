const router = require("express").Router();
const booksController = require("../../controllers/bookController");

router
  .route("/api/saved")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/api/saved/:id").delete(booksController.delete);
module.exports = router;
