// middlewares
const personMongooseModel = require("./models/person");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ObjectId = require("mongoose").Types.ObjectId;

const app = express();
app.use(express.static("build"));
// cors middleware to allow for transfers betweeen two different addresses
app.use(cors());
// express json middleware
app.use(express.json());
// new morgan token
morgan.token("content", function (request, res) {
	return JSON.stringify(request.body);
});
app.use(
	morgan(
		":method :url :status :res[content-length] - :response-time ms :content"
	)
);

// getting the collectin of resources
app.get("/api/persons", async (request, response) => {
	response.json(await personMongooseModel.find({}).then((res) => res));
});
// getting info about our collection of  resources
app.get("/info", async (request, response) => {
	const len = await personMongooseModel.countDocuments({});
	response.send(`<div>
        <p>Phonebook has info for ${len} people</p>
        <p>${Date()}</p>
    </div>`);
});
// getting an specific resource
app.get("/api/persons/:id", (request, response, next) => {
	personMongooseModel
		.findById(request.params.id)
		.then((res) => {
			if (res) {
				response.json(res);
			} else {
				response.status(404).json({ error: "Not found" });
			}
		})
		.catch((error) => next(error));
});
// delete server-side logic
app.delete("/api/persons/:id", (request, response, next) => {
	const id = request.params.id;
	personMongooseModel
		.findByIdAndRemove(id)
		.then((res) => {
			if (!res) {
				response.status(400).end();
				return;
			}
			response.status(204).end();
		})
		.catch((error) => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
	const body = request.body;
	const newPerson = {
		name: body.name,
		number: body.number,
	};
	// 60d9ceb59c309b1820966a91
	// 60d9ceb59c309b1820966a91
	personMongooseModel
		.findOneAndUpdate({ _id: new ObjectId(request.params.id) }, newPerson, {
			new: true,
			// by default validators don't run on updates.. so we must set runValidators to true
			runValidators: true,
			context: "query",
		})
		.then((res) => {
			if (res) {
				response.json(res);
			}
		})
		.catch((error) => {
			response.status(400).json({ message: error.message });
		});
});

app.post("/api/persons", (request, response, next) => {
	const note = new personMongooseModel({
		name: request.body.name,
		number: request.body.number,
		// this could lead to duplicate id's
	});
	note
		.save()
		.then((res) => {
			return response.json(res);
		})
		.catch((error) => {
			response.status(400).json({ error: error.message });
		});
});

// middleware for handling requests to routes that don't exits
app.use((request, response) => {
	response.status(404).send({ error: "Page not found" });
});

// error handling middleware
app.use((error, request, response, next) => {
	if (error.name === "ValidationError") {
		return response.status(400).json({ error: "Name must be unique" });
	}
	if (error.name === "CastError") {
		return response.status(400).json({ error: "Id format must be valid" });
	}
	next(error);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
