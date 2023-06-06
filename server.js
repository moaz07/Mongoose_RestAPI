const express = require("express");
const app = express();

const connectdb = require("./config/connectdb");
const contactRoute = require("./routes/contactRoute");

connectdb();

// For Display
app.use(express.json());

app.use("/contact", contactRoute);

// Create Server port
app.listen(8000, () => {
  console.log("Server is up !");
});
