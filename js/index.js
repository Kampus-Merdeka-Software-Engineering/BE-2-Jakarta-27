const express = require("express")

// init express
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require("./connection")
const response = require("./response")
const router = ("./routers/router")
app.use(bodyParser.json())

// Home Route
app.get("/home",(req, res) => {
    response(200, "ini data", "ini message", res)
})

// Isu Route
app.get("/isu",(req, res) => {
    response(200, "oke bisa","Berita terupdate capres cawapres", res)
})

// Pilpres Route
app.get("/pilpress",(req, res) => {
    const id_paslon = req.params.id_paslon
    response(200, "Ganjar", `ambil by id ${id_paslon}`, res)
})

// About Route

app.get("/about", (req, res) => {
    response(200, "ketua tim", "BE", res)
})
app.post("/berita",(req, res) => {
    response(200, "Ini berita Pilpres", res)
})

app.put("/berita",(req, res) => {
    response(200, "Update Data", res)
})

app.delete("/berita",(req, res) => {
    response(200, "Delete data", res)
}) 

app.listen(port, () => {
    console.log("Server run well") 
})

