const express = require("express");
const router = express.Router();

//@route  GET request for api/profile/test
//@dsc    Tests profile route
//@access Public
router.get("/test", function (req, res) {
	res.json({ msg: "Profile Works" });
});

module.exports = router;
