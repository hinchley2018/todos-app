const express = require("express")
const bodyParser = require('body-parser')
require("dotenv").config()
const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/todos", require("./controllers/todos"))

app.get("*", (req, res) => {
    res.send("Page Not Found")
})

app.listen(8000, () => {
    console.log("listening on port", 8000)
})