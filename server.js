const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//User made modules
const users = require("./route/api/users");
const profile = require("./route/api/profile");
const posts = require("./route/api/posts");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(function () {
		console.log("MongoDB connected");
	})
	.catch(function (err) {
		console.log(err);
	});

//GET requests
app.get("/", (req, res) => {
	res.send("hello world mate!");
});

//Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//To the PORT
const port = process.env.PORT || 5000;

app.listen(port, function () {
	console.log(`Server running on port ${port}`);
});
