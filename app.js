require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();

// db connection
require("./models/dbconfig").dbconnection();

// routes
const userRouter = require("./routes/userRoute");

// logger
const logger = require("morgan");
app.use(logger("tiny"));
// body pasrser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://localhost:8080/api/user/
// http://localhost:8080/api/user/create

app.use("/api/user", userRouter);

// server
app.listen(process.env.PORT, () => {
    console.log(`The Server is running on port ${process.env.PORT}`);
});
