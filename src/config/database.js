import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Connect to a database url according to environment variables
export const connectDatabase = async () => {
  // Retrieve environment variable
  let dbURL = process.env.DATABASE_URL || process.env.DATABASE_URI;

  // If url is undefined, reject connection
  if (!dbURL) {
    return console.error("Database URL undefined, no connection made");
  }

  // Connect to the database
  console.log("Connecting to " + dbURL);
  await mongoose.connect(dbURL);
  console.log("Database connected");
};