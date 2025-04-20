import express from "express";
import mongoose from "mongoose";

export const router = express.Router();

// Root route - displays database service health 
router.get("/", (request, response) => {
	response.json({
		name: mongoose.connection.name,
		models: mongoose.connection.modelNames(),
		address: mongoose.connection.host,
		readyState: mongoose.connection.readyState,
	});
});

// Controller route imports
// import *routeName* from "../controllers/*routeName*";


// Route registration
// router.use("/*basePath*", *routeName*);


// Wildcard route
router.get(/(.*)/, (request, response) => {
	response.status(404).json({
		success: false,
		message: "Resource does not exist."
	})
});