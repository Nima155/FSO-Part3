require("dotenv").config();
const mongoose = require("mongoose");
// for validating that entries are unique
const uniqueValidator = require("mongoose-unique-validator");
// connect to the database
mongoose.connect(process.env.BASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});
// collection schema
const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		minLength: 3,
	},
	number: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: (v) => {
				return v.match(/\d/g).length >= 8;
			},
			message: (props) => "Number must have at least 8 digits",
		},
	},
});
schema.plugin(uniqueValidator);
// cleans up the JSON rep of any document ... JSON.stringify(<ele>) === gives us the json rep
schema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});
// model that we use to query or add data to our database
module.exports = mongoose.model("Person", schema);
