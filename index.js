// middlewares
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
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

let NOTES = [
	{ id: 1, name: "Arto Hellas", number: "040-123456" },
	{ id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
	{ id: 3, name: "Dan Abramov", number: "12-43-234345" },
	{ id: 4, name: "Mary Poppendick", number: "39-23-6423122" },
];

// getting the collectin of resources
app.get("/api/persons", (request, response) => {
	// console.log("hey");
	response.json(NOTES);
});
// getting info about our collection of  resources
app.get("/info", (request, response) => {
	response.send(`<div>
        <p>Phonebook has info for ${NOTES.length} people</p>
        <p>${Date()}</p>
    </div>`);
});
// getting an specific resource
app.get("/api/persons/:id", (request, response) => {
	const id = parseInt(request.params.id);
	const element = NOTES.find((ele) => ele.id === id);
	if (element === undefined) {
		response.status(404).end();
	}
	response.json(element);
});

app.delete("/api/persons/:id", (request, response) => {
	const id = parseInt(request.params.id);
	NOTES = NOTES.filter((ele) => ele.id !== id);
	response.status(204).end();
});

app.post("/api/persons", (request, response) => {
	if (!request.body.name || !request.body.number) {
		// 400: bad request
		return response
			.status(400)
			.json({ error: `missing ${!request.body.name ? "name" : "number"}` });
	} else if (NOTES.find((ele) => ele.name === request.body.name)) {
		return response.status(400).json({ error: "name must be unique" });
	}
	const note = {
		name: request.body.name,
		number: request.body.number,
		// this could lead to duplicate id's
		id: Math.floor(Math.random() * 1000000),
	};
	NOTES = NOTES.concat(note);
	response.json(note);
});
const PORT = process.env.PORT || 3001;

app.listen(PORT);
