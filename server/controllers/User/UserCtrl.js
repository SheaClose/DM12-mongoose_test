const User = require("./User");

module.exports = {
  get(req, res) {
    User.find({ _id: req.params.id }).then(([user]) => {
      return res.status(200).json(user);
    });
  },
  put(req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      function(err, user) {
        if (err) return handleError(err);
        res.status(200).json(user);
      }
    );
  },
  post(req, res) {
    console.log("req.body: ", req.body);
    new User(req.body).save().then(user => {
      console.log("user: ", user);
      return res.status(200).json(user);
    });
  },
  delete(req, res) {
    console.log("req.params.id: ", req.params.id);
    User.deleteOne({ _id: req.params.id }, (err, user) => {
      if (err) res.status(500).json("Error");

      return res.status(200).json("Deleted User");
    });
  }
};
