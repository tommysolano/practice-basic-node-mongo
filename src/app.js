const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');


//connecting to db
mongoose.connect("mongodb://localhost/crud-mongo", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(db => console.log("bd connected"))
    .catch(err => console.error(err))

//importing routes
const indexRoutes = require("./routes/index")

//settings

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname + '/views'))
app.set("view engine", "ejs")


//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}))

//routes
app.use("/", indexRoutes);

//starting the server
app.listen(app.get("port"), () => {
    console.log(`listen on the port ${app.get("port")}`)
})

