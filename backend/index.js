import express, { response } from "express";
import { mongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS policy
//Option 1: Allow all origins with Default of cors(*)
app.use(cors());
app.get("/", (request, response) => {
  return response
    .status(234)
    .send("Welcome to MERN Stack tutorial shuvkant Chaudhary");
});

app.use("/books", booksRoute);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
