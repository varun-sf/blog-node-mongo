const express = require("express");
require("dotenv").config();

const app = express();
require("./config/dbConnect");


const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log('Server is up and running ${PORT}'));