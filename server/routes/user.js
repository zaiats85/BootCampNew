const router = require('express').Router();

const User = require('../models/user');

router.get("/", (req, res) => {
  res.send({ test: "data" });
})

router.get("/new", (req, res) => {
  const newUser = new User({
    firstName: "Bob",
    lastName: "Marley",
  });

  newUser.save(function (err) {
    if (err) return handleError(err);
    // saved!
    res.send(newUser);
  })
})

module.exports = router;