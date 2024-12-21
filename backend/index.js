import express, { response } from "express";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

//Middleware for parsing request body
app.use(express.json());
app.use(cors())

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
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening in port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
