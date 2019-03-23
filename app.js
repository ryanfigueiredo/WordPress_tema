const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, 'src')))

app.get("/", function (req, res) {
    res.status(200)
        .sendFile(path.join(__dirname, 'src', 'index.html'))
})

app.listen(3000, '192.168.15.3')
console.log("servidor rodando na porta 3000")
