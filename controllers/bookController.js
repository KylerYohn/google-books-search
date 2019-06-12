const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Book.create(req.body).then(results => console.log(results));
  },
  findAll: function(req, res) {
    db.Book.find({})
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },

  delete: function(req, res) {
    db.Book.remove();
  }
};
