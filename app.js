const express = require("express");
const connectDB = require('./config/db');
// error handler
const dotenv = require("dotenv").config();

connectDB();

const app = express();

const port = process.env.PORT || 6000;

app.use(express.json());
app.use("/api/v1/projects", require("./routes/project.route"));

// error handler

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
