const express = require("express");
const router = express.Router();

//@route  GET request for api/posts/test
//@dsc    Tests posts route
//@access Public
router.get("/test", function (req, res) {
	res.json({ msg: "Post Works" });
});

module.exports = router;
