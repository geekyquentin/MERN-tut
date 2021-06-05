const express = require("express");
const router = express.Router();

//@route  GET request for api/users/test
//@dsc    Tests users route
//@access Public
router.get("/test", function (req, res) {
	res.json({ msg: "Users Works" });
});

module.exports = router;
