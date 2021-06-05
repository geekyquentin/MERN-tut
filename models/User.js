const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
	//users collection:
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
		//required: true,
		//the above one is false, coz it is not taken as input
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = User = mongoose.model("users", UserSchema);
//first paramter: the name we want to use,
//second parameter: the actual schema
