const path = require("path");

const express = require("express");

// Routes
// const sharedRoutes = require("./routes/sharedRoutes");

// Enabling .env variables
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

// set css & js of EJS pages public
app.use(express.static(path.join(__dirname, "public")));
// serve react build
app.use(express.static(path.join(__dirname, "react_build")));

app.listen(process.env.PORT);

// app.use(sharedRoutes);

// Serving react app
app.use((req, res) => {
	res.sendFile(path.resolve(__dirname, 'react_build', 'index.html'))
})
