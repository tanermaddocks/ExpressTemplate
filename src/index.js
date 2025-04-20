import express from "express";

import { connectDatabase } from "./config/database.js";
import { router } from "./config/router.js";
import { errorHandler } from "./middleware/error-handler.js";

// Connect to the database
connectDatabase();

// Create an instance of the Express system
const app = express();

// Allow JSON as part of requests and responses
app.use(express.json());

// Register routes
app.use("/", router);

// Register middleware
app.use(errorHandler);

// Run server
app.listen(4000, () => {
  console.log("Server is running")
})