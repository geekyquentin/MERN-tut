const express = require("express");
const router = express.Router();

const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

//Load User model
const User = require("../../models/User");

//@route  GET request for api/users/test
//@dsc    Tests users route
//@access Public
router.get("/test", function (req, res) {
	res.json({ msg: "Users Works" });
});

//@route  GET request for api/users/register
//@dsc    Register user
//@access Public
router.post("/register", function (req, res) {
	User.findOne({ email: req.body.email }).then(function (user) {
		if (user) {
			return res.status(400).json({ email: "Email already exists" });
		} else {
			const avatar = gravatar.url(req.body.email, {
				s: "200", //size
				r: "pg", //rating
				d: "mm", //default
			});

			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				avatar,
				password: req.body.password,
			});

			bcrypt.genSalt(10, function (err, salt) {
				bcrypt.hash(newUser.password, salt, function (err, hash) {
					if (err) {
						throw err;
					}
					newUser.password = hash;
					newUser
						.save()
						.then(function (user) {
							res.json(user);
						})
						.catch(function (err) {
							console.log(err);
						});
				});
			});
		}
	});
});

module.exports = router;
