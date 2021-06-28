const mongoose = require("mongoose");
if (process.argv.length !== 3 && process.argv.length !== 5) {
	console.log(
		"Invalid number of arguments,   usage: node file_name db_password <name> <number>"
	);
	process.exit(1);
}
// database URL taken from MongoDB atlas
const DATABASE_URL = `mongodb+srv://Nima155:${process.argv[2]}@cluster0.bajga.mongodb.net/phonebook?retryWrites=true&w=majority`;
// schema used for adding documents to our collection
const schema = new mongoose.Schema({
	name: String,
	number: String,
});
// cleans up the JSON rep of any document ... JSON.stringify(<ele>) === gives us the json rep
schema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});
// model that we use to query or add data to our database
const Person = mongoose.model("Person", schema);

mongoose
	.connect(DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then((db) => {
		if (process.argv.length === 5) {
			new Person({
				name: process.argv[3],
				number: process.argv[4],
			})
				.save()
				.then((res) => {
					console.log(
						`added ${res.name} number ${res.number} to the phonebook`
					);
					// disconnect must be here as save runs asynchronously
					db.disconnect();
				});
		} else {
			Person.find({}).then((res) => {
				console.log("Phonebook:");
				res.forEach((ele) => {
					console.log(ele.name, ele.number);
				});
				// disconnect must be here as find runs asynchronously
				db.disconnect();
			});
		}
	});

// console.log(process.env.PASS);
