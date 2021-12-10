const express = require("express")
require("dotenv").config()
const app = express()

app.use(express.static("public"))

app.use("/api/todos", require("./controllers/todos"))

app.get("*", (req, res) => {
    res.send("Page Not Found")
})

app.listen(8000, () => {
    console.log("listening on port", 8000)
})