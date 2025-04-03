const express = require("express");
const app = express();
const useRouter = require("./routes/emp"); // Correct import
const { connectDB } = require("./connectionDB");
const path = require("path");
const uiRouter = require("./routes/uiEmp");

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// connecting to the database
connectDB("mongodb://localhost:27017/authe_tbppp").then(() => {
  console.log("db connected");
});

// router and URL by middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", uiRouter);
app.use("/", useRouter); // Corrected from userRoute to useRouter

// app listening
app.listen(6001, () => {
  console.log("Server is running on port 6001");
});
