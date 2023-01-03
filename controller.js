const User = require("./user");

exports.search = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const user = new User({
    title: req.body.title,
    username: req.body.username,
    searchDate: req.body.searchDate,
  });

  // Save Tutorial in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while searching.",
      });
    });
};

exports.findAll = (req, res) => {
  const lastDays = req.query.lastDays;
  User.find({
    searchDate: {
      $gte: new Date(new Date().getTime() - lastDays * 24 * 60 * 60 * 1000),
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findSearchByHours = (req, res) => {
    const lastHours = req.query.lastHours;
  
    User.find({
        searchDate: { 
            $gte: new Date(new Date().getTime() - 1000 * 60 * (lastHours*60))
        }
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  };
