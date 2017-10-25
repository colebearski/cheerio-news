// Mongoose Documentation
// Mongoose NPM Dependancy
var mongoose = require("mongoose");

// Connecting to MongoDB
// URI Link
// mLab DB
mongoose.connect("mongodb://heroku_5mgp3vg0:pqqi8k303dm5ndul33stiban4d@ds035703.mlab.com:35703/heroku_5mgp3vg0", function (err) {
	if (err) throw err;
	console.log("Database Connected");
});




